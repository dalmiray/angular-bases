import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3> Counter: {{counter}} </h3>
  <button (click)="IncremenBy(+1)"> +1</button>
  <button (click)="Reset(10)"> Reset</button>
  <button (click)="IncremenBy(-1)"> -1</button>

  `
})

export class CounterComponent {
  public  title: string = 'Mi primera APP de Angular';
  public counter: number = 10;

 public IncremenBy(value:number){
   this.counter +=value;
 }

 public Reset(value: number)
 {
   this.counter = value;
 }

  constructor() { }


}
