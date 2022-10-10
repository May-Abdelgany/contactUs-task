import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { FormComponent } from './components/form/form.component';
import { MapComponent } from './components/map/map.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MainComponent,
    FormComponent,
    MapComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,HttpClientModule],
 
providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
