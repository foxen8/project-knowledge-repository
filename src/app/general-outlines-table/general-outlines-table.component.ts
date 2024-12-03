import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';
import { Table, TableFilterEvent } from 'primeng/table';

@Component({
  selector: 'general-outlines-table',
  templateUrl: './general-outlines-table.component.html',
  styleUrls: ['./general-outlines-table.component.scss'],
})
export class GeneralOutlinesTableComponent {
  @ViewChild('dt1') table: Table | undefined; // Reference to the table component
  @Input() showDialog: boolean = false;
  @Output() addDialogClosed = new EventEmitter<boolean>();

  generalOutlinesArray: Array<any> = [
    {
      code: '1.1',
      positionGeneralOutline: 'xx',
      isAssigned: true,
      profileRoleCode: 'JP1.1',
      profileRole: 'xxx',
      profileRoleDescription: 'xxxx',
    },
    {
      code: '1.1',
      positionGeneralOutline: 'xx',
      isAssigned: false,
      profileRoleCode: 'JP1.1',
      profileRole: 'xxx',
      profileRoleDescription: 'xxxx',
    },
    {
      code: '1.1',
      positionGeneralOutline: 'xx',
      isAssigned: true,
      profileRoleCode: 'JP1.1',
      profileRole: 'xxx',
      profileRoleDescription: 'xxxx',
    },
  ];
  filteredGOutlines: any[] = []; // Store filtered data here
  loading: boolean = false;
  selectGOutlinesMenuActions: Array<MenuItem> = [];
  selectedRow: any;
  selectedIndex: number = 0;
  editGOutlineModal: boolean;
  // deleteModal: boolean;
  newRow: any;

  constructor() {
    this.editGOutlineModal = false;
    this.showDialog = false;
    // this.deleteModal = false;
  }
  ngOnInit(): void {
    this.filteredGOutlines = this.generalOutlinesArray;
    this.selectGOutlinesMenuActions = [
      {
        items: [
          {
            //this.translateService.instant('edit')
            label: 'Επεξεργασία',
            command: (menuItemCommandEvent: MenuItemCommandEvent): void => {
              this.editGOutlineModal = true;
              this.showDialog = true;
            },
            styleClass: 'action-link',
          },
          // {
          //   //this.translateService.instant('delete')
          //   label: 'Διαγραφή',
          //   command: (menuItemCommandEvent: MenuItemCommandEvent): void => {
          //     this.deleteModal = true;
          //   },
          //   styleClass: 'action-link',
          // },
        ],
      },
    ];
  }
  edit(index: any) {
    this.selectedRow = this.generalOutlinesArray[index];
    this.selectedIndex = index;
  }
  handleCancel(): boolean {
    this.editGOutlineModal = false;
    // this.deleteModal = false;
    this.showDialog = false;
    this.addDialogClosed.emit(false);
    return this.showDialog;
  }
  handleFormSubmit(data: any) {
    if (this.editGOutlineModal) {
      this.newRow = {
        email: data.email,
        name: data.name,
        surname: data.surname,
        active: data.active,
      };
      this.generalOutlinesArray[this.selectedIndex] = this.newRow;
      this.filteredGOutlines = this.generalOutlinesArray;
      this.updateGOutline();
    } else {
      this.newRow = {
        email: data.email,
        name: data.name,
        surname: data.surname,
        active: data.active,
      };
      this.showDialog = false;
      this.addDialogClosed.emit(false);
    }
  }

  updateGOutline() {}
  handleDelete(data: any) {}
}
