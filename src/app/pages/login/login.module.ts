import { LoginPage } from './login/login.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    IonicModule,
    LoginPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
