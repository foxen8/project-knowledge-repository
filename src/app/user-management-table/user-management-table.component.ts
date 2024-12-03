import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';
import { Table, TableFilterEvent } from 'primeng/table';

@Component({
  selector: 'user-management-table',
  templateUrl: './user-management-table.component.html',
  styleUrls: ['./user-management-table.component.scss'],
})
export class UserManagementTableComponent implements OnInit {
  @ViewChild('dt1') table: Table | undefined; // Reference to the table component
  @Input() showDialog: boolean = false;
  @Output() addDialogClosed = new EventEmitter<boolean>();

  usersArray: Array<any> = [
    {
      email: 'fotisxne@email.com',
      surname: 'Xen',
      name: 'fo',
      active: 'Ενεργός',
    },
    {
      email: 'fotisxne@email.com',
      surname: 'Xen',
      name: 'fo',
      active: 'Ενεργός',
    },
    {
      email: 'fotisxne@email.com',
      surname: 'Xen',
      name: 'fo',
      active: 'Ενεργός',
    },
  ];
  filteredUsers: any[] = []; // Store filtered data here
  loading: boolean = false;
  selectUsersMenuActions: Array<MenuItem> = [];
  selectedRow: any;
  selectedIndex: number = 0;
  editUserModal: boolean;
  deleteModal: boolean;
  newRow: any;

  constructor() {
    this.editUserModal = false;
    this.showDialog = false;
    this.deleteModal = false;
  }
  ngOnInit(): void {
    this.filteredUsers = this.usersArray;
    this.selectUsersMenuActions = [
      {
        items: [
          {
            //this.translateService.instant('edit')
            label: 'Επεξεργασία',
            command: (menuItemCommandEvent: MenuItemCommandEvent): void => {
              this.editUserModal = true;
              this.showDialog = true;
            },
            styleClass: 'action-link',
          },
          {
            //this.translateService.instant('delete')
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
  customGlobalFilter(value: string, data: any[]): any[] {
    if (!value) return data; // Return all data if no value

    const lowerCaseValue = value.toLowerCase();

    return data.filter((item) => {
      // Check if any of the fields contain the search term
      return (
        item.name.toLowerCase().includes(lowerCaseValue) ||
        item.email.toLowerCase().includes(lowerCaseValue) ||
        item.surname.toLowerCase().includes(lowerCaseValue) ||
        item.active.toLowerCase().includes(lowerCaseValue)
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
      };
      this.usersArray[this.selectedIndex] = this.newRow;
      this.filteredUsers = this.usersArray;
      this.updateUser();
    } else {
      this.newRow = {
        email: data.email,
        name: data.name,
        surname: data.surname,
        active: data.active,
      };
      this.createNewUser();
      this.showDialog = false;
      this.addDialogClosed.emit(false);
    }
  }
  createNewUser() {
    //create user from service
  }
  updateUser() {
    // update user with service
  }
  handleDelete(data: any) {}
}