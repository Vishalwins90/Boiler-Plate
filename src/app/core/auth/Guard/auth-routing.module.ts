import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { SignupComponent } from '../component/sign-in/sign-up.component';
import { LoginComponent } from '../component/login/login.component';
import { HeaderComponent } from '../../shell/Header/Header.component';
import { HomeComponent } from 'src/app/feature/home/home.component';
// import { AddEmployeeComponent } from 'src/app/feature/add-employee/add-employee.component';
import { FlightsComponent } from 'src/app/feature/flights/flights.component';
import { AddEmployeeComponent } from 'src/app/feature/home/Components/add-employee/add-employee.component';
import { unAuthGuard } from '../../component/un-auth.guard';
const routes:Routes=[
  {path:'',component:LoginComponent },
  {path:'LoginIn',component:LoginComponent,canActivate:[unAuthGuard]},
  {path:'Signup',component:SignupComponent },
  {path:'home',component:HomeComponent, canActivate:[AuthGuard]},
  {path:'flights',component:FlightsComponent},
  {path:'add-employee',component:AddEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
