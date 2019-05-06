import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Main1Component } from './main1.component';

const routes: Routes = [
    {
        path: '',
        component: Main1Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Module1RoutingModule {
}
