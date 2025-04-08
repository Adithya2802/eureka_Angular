import Snackbar from 'awesome-snackbar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {}

  showError(msg: string) {
    new Snackbar(msg, { position: 'top-center', theme: 'light' });
  }
}
