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

@Component({
  selector: 'user-form',
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
    active: [false],
  });
  virtualScrollOptions: ScrollerOptions = {
    itemSize: 34,
    orientation: 'vertical',
    scrollWidth: '500px',
  };

  cycleId?: string;
  constructor(private formBuilder: FormBuilder) {
    this.formInit();
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
      email: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      active: [false],
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
        email: this.row['email'],
        name: this.row['name'],
        surname: this.row['surname'],
        active: this.row['active'],
      });
    }
  }
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      active: [false],
    });
  }
}
