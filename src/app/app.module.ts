import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IncludeStylesNoRouterModule  } from '@codebakery/origami/styles';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    IncludeStylesNoRouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] /* otherwise Vaadin Components integration does not work */,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
