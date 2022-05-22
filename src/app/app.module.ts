import { BrowserModule } from '@angular/platform-browser';
/* Routing */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* Angular Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';
/* Components */
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppLayoutDashboardComponent } from './app-layout-dashboard/app-layout-dashboard.component';
import { HomeComponent } from './app-layout/home/home.component';
import { ContactComponent } from './app-layout/contact/contact.component';
import { LogInComponent } from './app-layout-user/log-in/log-in.component';
import { RegisterComponent } from './app-layout-user/register/register.component';
import { AppLayoutUserComponent } from './app-layout-user/app-layout-user.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AppLayoutDashboardComponent,
    HomeComponent,
    LogInComponent,
    RegisterComponent,
      AppLayoutUserComponent,
      ContactComponent
   ],
  imports: [
    BrowserModule,
    [FormsModule, ReactiveFormsModule],
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
