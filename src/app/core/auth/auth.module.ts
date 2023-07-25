import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { SignupComponent } from './component/sign-in/sign-up.component';
import { LoginComponent } from './component/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SignupComponent,LoginComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AuthModule { }
