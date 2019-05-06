import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IncludeStylesModule  } from '@codebakery/origami/styles';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    IncludeStylesModule,
    AppRoutingModule  // should be last (order matters)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] /* otherwise Vaadin Components integration does not work */,
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HelloComponent]
})
export class AppModule { }
