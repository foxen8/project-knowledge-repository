import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ScrollerOptions } from 'primeng/api';
import { ApiService } from 'src/app/services/api-service/api.service';

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
    profileRole: ['', Validators.required],
  });
  virtualScrollOptions: ScrollerOptions = {
    itemSize: 34,
    orientation: 'vertical',
    scrollWidth: '500px',
  };
  roles = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.formInit();
    this.getProfileRoles();
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
      profileRole: ['', Validators.required],
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
        profileRole: this.row['profileRole'],
      });
    }
  }
  ngOnInit(): void {
    this.generalOutlineForm = this.formBuilder.group({
      profileRole: ['', Validators.required],
    });
  }
  getProfileRoles() {
    this.apiService.getProfileRoles().subscribe((resp: any) => {
      this.roles = resp.map((item: any) => ({
        name: item.name,
        id: item.id,
        description: item.description,
      }));
    });
  }
}
