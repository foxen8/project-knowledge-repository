import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'delete-warning',
  templateUrl: './delete-warning.component.html',
  styleUrls: ['./delete-warning.component.scss'],
})
export class DeleteWarningComponent {
  @Input() deleteText: string = '';
  @Output() delete = new EventEmitter<any>(); // Emit form data on submit
  @Output() cancel = new EventEmitter<void>(); // Emit cancel event to close dialog

  constructor() {}
  onDelete() {
    this.delete.emit(true);
    this.onCancel();
  }

  onCancel() {
    this.cancel.emit();
  }
}
