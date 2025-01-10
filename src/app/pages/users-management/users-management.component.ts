import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';
import { HelperService } from 'src/app/services/helper-service/helper.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss'],
})
export class UsersManagementComponent {
  checked: boolean = false;
  addUser: boolean = false;
  refreshTrigger = false;
  constructor(
    private apiService: ApiService,
    private helperService: HelperService
  ) {}
  showDialog() {
    this.addUser = true;
  }
  handleFormCancel() {
    this.addUser = false;
  }
  handleCancel() {}
  onAddSubmit(event: any) {
    this.apiService.addUser(event).subscribe(
      (resp) => {
        this.refreshTrigger = !this.refreshTrigger;
      },
      (error) => {
        this.helperService.errorHandle(error);
      }
    );
    this.addUser = false;
  }
}
