import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


import { HomeComponent } from './home.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
