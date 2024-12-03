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
  selector: 'app-general-outlines-management',
  templateUrl: './general-outlines-management.component.html',
  styleUrls: ['./general-outlines-management.component.scss'],
})
export class GeneralOutlinesManagementComponent {
  checked: boolean = false;
  addUser: boolean = false;
  constructor() {}
  showDialog() {
    this.addUser = true;
  }
  handleFormCancel() {
    this.addUser = false;
  }
  handleCancel() {}
}
