import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent],
  imports: [
    CommonModule, UserRoutingModule, CoreModule
  ],
  exports:[LoginComponent, RegisterComponent, ProfileComponent]
})
export class UserModule { }
