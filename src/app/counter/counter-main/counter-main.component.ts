import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-main',
  templateUrl: './counter-main.component.html',
  styleUrls: ['./counter-main.component.scss'],
})
export class CounterMainComponent implements OnInit {
  counter: number = 0;
  authorName: string = 'Shivakumar M';

  constructor() {}

  ngOnInit(): void {}

  onIncrement(): void {
    this.counter += 1;
  }

  onDecrement(): void {
    this.counter -= 1;
  }

  onReset(): void {
    this.counter = 0;
  }

  onCustomAdd(val: string): void {
    this.counter += +val;
  }

  onAuthorChange(): void {
    this.authorName = 'Changed to Shiva';
  }
}
