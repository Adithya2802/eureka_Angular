import { HttpClient } from '@angular/common/http';
import { Component, effect, signal } from '@angular/core';


@Component({
  selector: 'app-signal-effect',
  imports: [],
  standalone:true,
  templateUrl: './signal-effect.component.html',
  styleUrl: './signal-effect.component.css'
})
export class SignalEffectComponent {

  userId = signal(1);
  userData: any;
  userDetailsEffect = effect(() => {
    const id = this.userId();
    this.fetchUserDetails(id);
  });
  destroyEffect() {
    this.userDetailsEffect.destroy()
  }
  constructor(private httpClient: HttpClient) {
  }
  fetchUserDetails(id: number) {
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe(response => {
      this.userData = response;
    })
  }
  incrementUserId() {
    this.userId.update(val => val + 1);
  }

}
