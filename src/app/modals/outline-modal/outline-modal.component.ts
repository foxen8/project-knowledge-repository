import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-outline-modal',
  templateUrl: './outline-modal.component.html',
  styleUrls: ['./outline-modal.component.scss'],
})
export class OutlineModalComponent implements OnInit, OnChanges {
  @Input() generalOutlines?: any[];
  @Input() selectedOutline?: any;
  index: number = 0;

  gOutlines?: any[];
  currentOutline: any;
  constructor() {}
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['generalOutlines']) {
      this.gOutlines = changes['generalOutlines'].currentValue;
    }
    if (changes['selectedOutline']) {
      this.currentOutline = changes['selectedOutline'].currentValue;
      this.index = this.gOutlines?.findIndex(
        (goutline) => goutline.id == this.currentOutline.id
      )!;
    }
  }
}
