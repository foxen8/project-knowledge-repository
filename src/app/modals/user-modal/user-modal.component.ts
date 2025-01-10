import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollerOptions } from 'primeng/api';
import { ApiService } from 'src/app/services/api-service/api.service';
import { HelperService } from 'src/app/services/helper-service/helper.service';

@Component({
  selector: 'user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserFormComponent implements OnChanges, OnInit {
  @Input() row: any;
  @Input() dialogHide?: boolean;
  @Input() isEdit?: boolean;
  @Input() checked?: boolean;
  @Output() formSubmit = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();
  userForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    active: [false, Validators.required],
    role: ['', Validators.required],
    vatNo: ['', Validators.required],
  });
  roles = [];
  virtualScrollOptions: ScrollerOptions = {
    itemSize: 34,
    orientation: 'vertical',
    scrollWidth: '500px',
  };
  states: { name: string; key: string }[] = [
    { name: 'ΕΝΕΡΓΟΣ', key: 'Ε' },
    { name: 'ΑΝΕΝΕΡΓΟΣ', key: 'A' },
  ];

  cycleId?: string;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private helperService:HelperService
  ) {
    this.formInit();
    this.apiService.getUserRoles().subscribe((resp: any) => {
      this.roles = resp;
    }, (error) => {
      this.helperService.errorHandle(error);
    });
  }
  onSubmit() {
    this.formSubmit.emit(this.userForm?.value);
    this.onCancel();
  }
  onCancel() {
    this.formInit();
    this.cancel.emit();
  }

  formInit() {
    this.userForm = this.formBuilder.group({
      vatNo: ['', Validators.required],
      email: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      role: ['', Validators.required],
      active: [false, Validators.required],
    });
  }

  getNestedProperty(obj: any, outerKey: string, innerKey: string) {
    if (obj[outerKey] && obj[outerKey][innerKey] !== undefined) {
      return obj[outerKey][innerKey];
    }
    return undefined;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.row) {
      this.userForm.patchValue({
        vatNo: this.row['vatNo'],
        role: this.row['role'],
        email: this.row['email'],
        name: this.row['firstName'],
        surname: this.row['lastName'],
        active: this.row['isActive'],
      });
    }
  }
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      vatNo: ['', Validators.required],
      role: ['', Validators.required],
      active: [false, Validators.required],
    });
  }
}
