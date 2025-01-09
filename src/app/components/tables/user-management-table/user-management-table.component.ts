import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';
import { Table, TableFilterEvent } from 'primeng/table';
import { ApiService } from '../../../services/api-service/api.service';

@Component({
  selector: 'user-management-table',
  templateUrl: './user-management-table.component.html',
  styleUrls: ['./user-management-table.component.scss'],
})
export class UserManagementTableComponent implements OnInit,OnChanges{
  @ViewChild('dt1') table: Table | undefined;
  @Input() showDialog: boolean = false;
  @Input() refreshTrigger: boolean = false;
  @Output() addDialogClosed = new EventEmitter<boolean>();

  usersArray: Array<any> = [];
  filteredUsers: any[] = [];
  loading: boolean = false;
  selectUsersMenuActions: Array<MenuItem> = [];
  selectedRow: any;
  selectedIndex: number = 0;
  editUserModal: boolean;
  deleteModal: boolean;
  newRow: any;

  constructor(private apiService: ApiService) {
    this.editUserModal = false;
    this.showDialog = false;
    this.deleteModal = false;
  }
  ngOnInit(): void {
    this.getUsers();
    this.initMenuActions();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['refreshTrigger'] && !changes['refreshTrigger'].isFirstChange()) {
      this.getUsers();
    }
  }
  customGlobalFilter(value: string, data: any[]): any[] {
    if (!value) return data;

    const lowerCaseValue = value.toLowerCase();
    return data.filter((item) => {
      return (
        item.email.toLowerCase().includes(lowerCaseValue) ||
        item.firstName.toLowerCase().includes(lowerCaseValue) ||
        item.lastName.toLowerCase().includes(lowerCaseValue)
      );
    });
  }
  onGlobalFilter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const searchValue = inputElement.value;

    if (this.table) {
      this.filteredUsers = this.customGlobalFilter(
        searchValue,
        this.usersArray
      );
      this.table.reset();
    }
  }

  onTableFilter(event: TableFilterEvent) {
    event.filters == undefined || event.filters['global'] == undefined
      ? (this.filteredUsers = this.usersArray)
      : (this.filteredUsers = event.filteredValue);
  }
  edit(index: any) {
    this.selectedRow = this.usersArray[index];
    this.selectedIndex = index;
  }
  handleCancel(): boolean {
    this.editUserModal = false;
    this.deleteModal = false;
    this.showDialog = false;
    this.addDialogClosed.emit(false);
    return this.showDialog;
  }
  handleFormSubmit(data: any) {
    if (this.editUserModal) {
      this.newRow = {
        email: data.email,
        name: data.name,
        surname: data.surname,
        active: data.active,
        role: data.role,
        vatNo: data.vatNo,
      };
      this.usersArray[this.selectedIndex] = this.newRow;
      this.filteredUsers = this.usersArray;
      this.updateUser(this.newRow);
    }
  }
  getUsers() {
    this.apiService.getUsers().subscribe((resp: any) => {
      this.usersArray = resp;
      this.filteredUsers = this.usersArray;
    });
  }
  initMenuActions() {
    this.selectUsersMenuActions = [
      {
        items: [
          {
            label: 'Επεξεργασία',
            command: (menuItemCommandEvent: MenuItemCommandEvent): void => {
              this.editUserModal = true;
              this.showDialog = true;
            },
            styleClass: 'action-link',
          },
          {
            label: 'Διαγραφή',
            command: (menuItemCommandEvent: MenuItemCommandEvent): void => {
              this.deleteModal = true;
            },
            styleClass: 'action-link',
          },
        ],
      },
    ];
  }
  updateUser(user: any) {
    this.apiService.updateUser(this.selectedRow.id, user).subscribe((resp) => {
      this.getUsers();
    });
  }
  handleDelete(data: any) {
    this.apiService.deleteUser(this.selectedRow.id).subscribe((resp) => {
      this.getUsers();
    });
  }
  refreshList(): void {
    this.getUsers();
  }
}
