import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'auth', component: AuthComponent,
        children: [
          // {path: '', redirectTo: 'signin', pathMatch: 'full'},
          {path: 'signin', component: SigninComponent},
      ]  
      }
    ])
  ]
})
export class AuthModule { }
