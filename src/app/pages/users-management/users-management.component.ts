import { Component } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss'],
})
export class UsersManagementComponent {
  checked: boolean = false;
  addUser: boolean = false;
  constructor(private apiService:ApiService) {}
  showDialog() {
    this.addUser = true;
  }
  handleFormCancel() {
    this.addUser = false;
  }
  handleCancel() {}
  onAddSubmit(event:any) {
    console.log(event)
    this.apiService.addUser(event).subscribe((resp)=>{})
  }
}
