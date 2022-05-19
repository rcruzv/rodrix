import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppLayoutDashboardComponent } from './app-layout-dashboard/app-layout-dashboard.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './app-layout/contact-us/contact-us.component';
import { HomeComponent } from './app-layout/home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppLayoutComponent,
    AppLayoutDashboardComponent,
    AppComponent,
    ContactUsComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
