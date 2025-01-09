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

  generalOutlinesArray: Array<any> = [];
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
    if (changes['checked'].previousValue !== undefined) {
      if (changes['checked'].currentValue !== undefined) {
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
  getGeneralOutlines(bool?: boolean) {
    const fetchOutlines = this.checked
      ? this.apiService.getGeneralOutlines(true)
      : this.apiService.getGeneralOutlines();

    fetchOutlines.subscribe((resp: any) => {
      this.generalOutlinesArray = resp.map((goutline: any) => ({
        ...goutline,
        isAssigned: goutline.profileRole != null,
      }));
      this.filteredGOutlines = this.generalOutlinesArray;
    });
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
    this.updateGeneralOutline(data.profileRole.id);
  }
  updateGeneralOutline(roleId: any) {
    this.apiService
      .updateGeneralOutline(roleId, this.selectedRow.id)
      .subscribe((resp) => {
        this.getGeneralOutlines();
      });
  }
}
