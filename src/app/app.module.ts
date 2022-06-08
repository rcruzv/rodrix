import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* No Layout views */
import { IndexComponent } from './views/index/index.component';

/* Components */
import { IndexNavbarComponent } from './components/navbars/index-navbar/index-navbar.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    IndexNavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    [FormsModule, ReactiveFormsModule],
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
