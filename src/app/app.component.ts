import { Component } from '@angular/core';
import { IncludeStyles } from '@codebakery/origami/styles';

import '@vaadin/vaadin-lumo-styles/style.js';

@IncludeStyles('app-colors')
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'include-styles-demo';
}
