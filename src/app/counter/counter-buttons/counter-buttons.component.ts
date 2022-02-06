import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss'],
})
export class CounterButtonsComponent implements OnInit {
  @Output() incrementClicked = new EventEmitter();
  @Output() decrementClicked = new EventEmitter();
  @Output() resetClicked = new EventEmitter();
  @Output() customClicked = new EventEmitter();
  @Output() authorChangeClicked = new EventEmitter();
  @Input() author: string = '';
  @ViewChild('customCount') customCountValue: ElementRef = {} as ElementRef;

  constructor() {}

  ngOnInit(): void {}

  incrementValue(): void {
    this.incrementClicked.emit();
  }

  decrementValue(): void {
    this.decrementClicked.emit();
  }

  resetValue(): void {
    this.customCountValue.nativeElement.value = '';
    this.resetClicked.emit();
  }

  customValue(value: string): void {
    this.customClicked.emit(value);
  }

  authorChange(): void {
    this.authorChangeClicked.emit();
  }
}
