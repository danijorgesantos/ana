import { Component, OnInit } from '@angular/core';
import { CounterFacade } from './counter.facade';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass'],
  providers: [CounterFacade]
})
export class CounterComponent implements OnInit {

  public number: number;

  constructor(private facade: CounterFacade) { }

  ngOnInit(): void {
    this.facade.selectedCount$.subscribe(
      data => {
        this.number = data;
      }
    );
  }

  onClickIncrement() {
    this.facade.Increment();
  }

  onClickDecrement() {
    this.facade.Decrement();
  }

  onClickReset() {
    this.facade.Reset();
  }

}
