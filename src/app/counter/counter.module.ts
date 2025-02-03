import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter.component';
import { NgIf } from '@angular/common';

@NgModule({
  exports: [
    CounterComponent
  ],
  declarations: [
    CounterComponent
  ],
  providers: [],
})
export class CounterModule { }