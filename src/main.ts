import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// We use ShadowDom by default for angular components
// (this works on Chrome and Firefox by default and on Edge with the webcomponentsjs polyfills)
platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    // Not using ShadowDom: it removes the possibility to do global styling.
    // We wan to use lumo color/typography (e.g. link color, h3, etc.)
    //
    defaultEncapsulation: ViewEncapsulation.ShadowDom
  })
  .catch(err => console.error(err));
