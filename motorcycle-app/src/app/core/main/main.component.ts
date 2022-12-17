import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('600ms ease-in')),
    ])
  ]
})
export class MainComponent {
  constructor(public authService: AuthService) { }

  show = false;

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  toggle() {
    this.show = !this.show
  }

}
