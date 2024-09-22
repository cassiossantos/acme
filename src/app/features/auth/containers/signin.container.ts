import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acme-signin-container',
  template: `<acme-signin-presenter></acme-signin-presenter>`,
})
export class SigninContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
