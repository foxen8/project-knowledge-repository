import { Component } from '@angular/core';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss'],
})
export class UsersManagementComponent {
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
