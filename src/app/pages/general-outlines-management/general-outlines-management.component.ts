import { Component } from '@angular/core';

@Component({
  selector: 'app-general-outlines-management',
  templateUrl: './general-outlines-management.component.html',
  styleUrls: ['./general-outlines-management.component.scss'],
})
export class GeneralOutlinesManagementComponent {
  checked: boolean = false;
  showEditDialog: boolean = false;
  constructor() {}
  showDialog() {
    this.showEditDialog = true;
  }
  handleFormCancel() {
    this.showEditDialog = false;
  }
}
