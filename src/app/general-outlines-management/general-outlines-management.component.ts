import { Component } from '@angular/core';

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
