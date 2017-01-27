import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent, LoginComponent ]
})
export class AppModule { }
