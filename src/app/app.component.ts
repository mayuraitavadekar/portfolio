import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
     <app-header></app-header>
     <app-aboutme></app-aboutme>
     <app-experience></app-experience>
     <app-skills></app-skills>
     <app-projects></app-projects>
     <app-contact></app-contact>
  `,
  styles: []
})

export class AppComponent {
  title = 'portfolio';
}
