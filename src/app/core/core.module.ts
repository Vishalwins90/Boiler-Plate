import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { FooterComponent } from './shell/footer/footer.component';
import { MainComponent } from './shell/main/main.component';
// import { NewComponentComponent } from './shell/Home/Home.component';
// import { LoginComponent } from './auth/component/login/login.component';
// import { SignInComponent } from './auth/component/sign-in/sign-in.component';




@NgModule({
  declarations: [
    // LoginComponent,
    // SignInComponent
  
    ShellComponent,
    FooterComponent,
    MainComponent,
    // NewComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
