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
  roles=[{
    name:'Ρολος 1',value:1
  },
  {
    name:'Ρολος 2',value:2
  },{
    name:'Ρολος 3',value:3
  },
  {
    name:'Ρολος 4',value:4
  }]
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
      vatNo: ['', Validators.required],
      role: ['', Validators.required],
      active: [false, Validators.required],
    });
  }
}
