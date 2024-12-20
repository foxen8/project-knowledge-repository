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
import { Table } from 'primeng/table';
import { ApiService } from '../../../services/api-service/api.service';


@Component({
  selector: 'general-outlines-table',
  templateUrl: './general-outlines-table.component.html',
  styleUrls: ['./general-outlines-table.component.scss'],
})
export class GeneralOutlinesTableComponent implements OnInit, OnChanges {
  @ViewChild('dt1') table: Table | undefined;
  @Input() showDialog: boolean = false;
  @Input() checked: boolean = false;
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
  filteredGOutlines: any[] = [];
  loading: boolean = false;
  selectGOutlinesMenuActions: Array<MenuItem> = [];
  selectedRow: any;
  selectedIndex: number = 0;
  editGOutlineModal: boolean;
  newRow: any;

  constructor(private apiService: ApiService) {
    this.editGOutlineModal = false;
    this.showDialog = false;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['changes'] !== undefined) {
      if (changes['changes'].currentValue !== undefined) {
        this.getGeneralOutlines();
      }
    }
  }
  ngOnInit(): void {
    this.getGeneralOutlines();
    this.initMenuActions();
  }
  edit(index: any) {
    this.selectedRow = this.generalOutlinesArray[index];
    this.selectedIndex = index;
  }
  handleCancel() {
    this.editGOutlineModal = false;
    this.showDialog = false;
    this.addDialogClosed.emit(false);
    return this.showDialog;
  }
  getGeneralOutlines() {
    // this.apiService.getGeneralOutlines().subscribe((resp) => {
    // this.generalOutlinesArray = resp;
    this.filteredGOutlines = this.generalOutlinesArray;
    // });
  }
  initMenuActions() {
    this.selectGOutlinesMenuActions = [
      {
        items: [
          {
            label: 'Επεξεργασία',
            command: (menuItemCommandEvent: MenuItemCommandEvent): void => {
              this.editGOutlineModal = true;
              this.showDialog = true;
            },
            styleClass: 'action-link',
          },
        ],
      },
    ];
  }
  handleFormSubmit(data: any) {
    if (this.showDialog) {
      this.newRow = {
        code: data.code,
        positionGeneralOutline: data.positionGeneralOutline,
        isAssigned: data.isAssigned,
        profileRoleCode: data.profileRoleCode,
        profileRole: data.profileRole,
        profileRoleDescription: data.profileRoleDescription,
      };
      this.generalOutlinesArray[this.selectedIndex] = this.newRow;
      this.filteredGOutlines = this.generalOutlinesArray;
      this.updateGeneralOutline(this.newRow);
    }
  }
  updateGeneralOutline(gOutline: any) {
    this.apiService.updateGeneralOutline(gOutline).subscribe((resp) => {});
  }
}
