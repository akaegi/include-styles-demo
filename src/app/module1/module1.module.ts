import { NgModule } from '@angular/core';
import { Module1RoutingModule as Module1Routing } from './module1-routing.module';
import { Main1Component } from './main1.component';
import { Sub1Component } from './sub1.component';

@NgModule({
  imports: [
    Module1Routing
  ],
  declarations: [
    Main1Component,
    Sub1Component
  ],
  entryComponents: [Sub1Component]
})
export class Module1 {
}
