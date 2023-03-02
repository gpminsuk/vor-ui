import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  public ngOnInit() {
    let script = this._renderer2.createElement('script');
    script.setAttribute('src', 'https://auth.magic.link/pnp/login');
    script.setAttribute(
      'data-magic-publishable-api-key',
      'pk_live_052B100BE33F7355'
    );
    script.setAttribute('data-redirect-uri', '/callback');
    this._renderer2.appendChild(this._document.body, script);
  }

  @HostListener('click') onClick() {
    console.log('User Click using Host Listener');
  }
}
