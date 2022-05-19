import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppLayoutDashboardComponent } from './app-layout-dashboard/app-layout-dashboard.component';
import { HomeComponent } from './app-layout/home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './app-layout/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'contact-us', component: ContactUsComponent}
    ]
  },
  { path: 'dashboard', component: AppLayoutDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
