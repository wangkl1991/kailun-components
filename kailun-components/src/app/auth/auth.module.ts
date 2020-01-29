import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { MaterialModule } from '../modules/material.module';



@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: 'auth', component: AuthComponent,
        children: [
          // {path: '', redirectTo: 'signin', pathMatch: 'full'},
          {path: 'signin', component: SigninComponent},
          {path: 'signup', component: SignupComponent}
      ]  
      }
    ])
  ]
})
export class AuthModule { }
