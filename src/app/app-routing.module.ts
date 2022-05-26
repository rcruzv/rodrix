import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppLayoutDashboardComponent } from './app-layout-dashboard/app-layout-dashboard.component';
import { AppLayoutUserComponent } from './app-layout-user/app-layout-user.component';
import { HomeComponent } from './app-layout/home/home.component';
import { LogInComponent } from './app-layout-user/log-in/log-in.component';
import { RegisterComponent } from './app-layout-user/register/register.component';
import { ContactComponent } from './app-layout/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'contact', component: ContactComponent}
    ]
  },
  {
    path: 'user',
    component: AppLayoutUserComponent,
    children: [
      { path: '', component: LogInComponent},
      { path: 'register', component: RegisterComponent}
    ]
  },
  { path: 'dashboard', component: AppLayoutDashboardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
