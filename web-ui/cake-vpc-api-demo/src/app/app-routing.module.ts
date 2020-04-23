import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CakePageComponent } from "./cake-page/cake-page.component";


const routes: Routes = [
  { path: '', component: CakePageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
