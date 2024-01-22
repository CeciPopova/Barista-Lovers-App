import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { CatalogueComponent } from './catalogue/catalogue.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
   {
     path: 'about',
     component: AboutComponent,
   },
  {
     path: 'login',
     component: LoginComponent,
   },
   {
     path: 'register',
     component: RegisterComponent,
   },
   {
     path: 'profile',
     component: ProfileComponent,
   },
   {
     path: 'catalogue',
     component: CatalogueComponent,
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
 
