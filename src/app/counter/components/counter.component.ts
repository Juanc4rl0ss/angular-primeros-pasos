import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
   <h1>{{title}}</h1>
<hr>
<h3>Counter: {{counter}}</h3>
<button (click)="increaseBy(+1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>
   
   
   <h1>Hola Counter</h1>
   `

})
export class CounterComponent {
    public title: string = 'Hola mundo';
    public counter: number = 10;
  
    public increaseBy(value: number): void {
      this.counter += value;
    }
  
    public resetCounter(): void {
      this.counter = 10;
    }
}