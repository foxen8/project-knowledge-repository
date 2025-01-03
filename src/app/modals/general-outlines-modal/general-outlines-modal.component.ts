import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ScrollerOptions } from 'primeng/api';

@Component({
  selector: 'app-general-outlines-modal',
  templateUrl: './general-outlines-modal.component.html',
  styleUrls: ['./general-outlines-modal.component.scss'],
})
export class GeneralOutlinesModalComponent {
  @Input() row: any;
  @Input() dialogHide?: boolean;
  @Input() isEdit?: boolean;
  @Input() checked?: boolean;
  @Output() formSubmit = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();
  generalOutlineForm: FormGroup = this.formBuilder.group({
    positionGeneralOutline: ['', Validators.required],
    isAssigned: [false],
    profileRole: ['', Validators.required],
    profileRoleDescription: ['', Validators.required],
  });
  virtualScrollOptions: ScrollerOptions = {
    itemSize: 34,
    orientation: 'vertical',
    scrollWidth: '500px',
  };
  roles = [
    {
      description: 'ProfileRoleDesc3\n',
      id: '9852733e-bfc9-4d06-8981-02e8d0d783bc',
      name: 'ProfileRoleName3',
    },
    {
      name: 'Ρολος 2',
      value: 2,
    },
    {
      name: 'Ρολος 3',
      value: 3,
    },
    {
      name: 'Ρολος 4',
      value: 4,
    },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.formInit();
  }
  onSubmit() {
    this.formSubmit.emit(this.generalOutlineForm?.value);
    this.onCancel();
  }
  onCancel() {
    this.formInit();
    this.cancel.emit();
  }

  formInit() {
    this.generalOutlineForm = this.formBuilder.group({
      positionGeneralOutline: ['', Validators.required],
      isAssigned: ['', Validators.required],
      profileRole: ['', Validators.required],
      profileRoleDescription: [false],
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
      this.generalOutlineForm.patchValue({
        positionGeneralOutline: this.row['name'],
        isAssigned: this.row['isAssigned'],
        profileRole: this.row['profileRole'],
        profileRoleDescription: this.row['profileRoleDescription'],
      });
    }
  }
  ngOnInit(): void {
    this.generalOutlineForm = this.formBuilder.group({
      positionGeneralOutline: ['', Validators.required],
      isAssigned: [false],
      profileRole: ['', Validators.required],
      profileRoleDescription: ['', Validators.required],
    });
  }
}
