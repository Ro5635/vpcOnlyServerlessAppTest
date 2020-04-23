import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CakeListingComponent } from './cake-listing/cake-listing.component';
import { CakePageComponent } from './cake-page/cake-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CakeListingComponent,
    CakePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
