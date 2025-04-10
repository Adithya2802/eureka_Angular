import { Component, computed, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signaldemo1',
  imports: [],
  standalone:true,
  templateUrl: './signaldemo1.component.html',
  styleUrl: './signaldemo1.component.css'
})
export class Signaldemo1Component {

  num: WritableSignal<number> = signal(0);
  messages: WritableSignal<string[]> = signal([]);
  numDouble: Signal<number> = computed(() => this.num() * 2);
  numSquare: Signal<number> = computed(() => this.num() * this.num());

  increment() {
    this.num.update((value: number) => value + 1)
    this.messages.set([...this.messages(), `Value of Num is: ${this.num()}`]);
  }
  decrement() {
    this.num.update((val: number) => val - 1);
    this.messages().pop()
    this.messages.set([... this.messages()]);
  }
  reset() {
    this.num.set(0);
    this.messages.set([]);
  }

}
