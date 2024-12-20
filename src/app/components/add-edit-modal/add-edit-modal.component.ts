import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.scss'],
})
export class AddEditModalComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Input() description?: string;
  @Input() duties?: any;
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();
  isDisabled: boolean = false;
  disabled?: boolean;
  showModal: boolean = false;
  dutyDescription: string = '';
  constructor() {}
  ngOnInit(): void {
    this.isDisabled = this.title !== undefined && this.title !== '';
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']) {
      this.isDisabled = this.title !== undefined && this.title !== '';
    }
  }
  cons(c: any) {
    this.dutyDescription = c.description;
  }

  onCancel() {
    this.cancel.emit();
  }
  onSave() {
    this.save.emit({
      title: this.title,
      description: this.description,
      isAdd: !this.isDisabled,
    });
  }
}
