import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './core/shell/Header/Header.component';
import { AuthRoutingModule } from './core/auth/Guard/auth-routing.module';
import { AuthModule } from './core/auth/auth.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureComponent } from './feature/feature.component';
// import { FlightsComponent } from './feature/flights/flights.component';
// impor { HomeComponent } from './feature/home/home.component';
import { ServicesComponent } from './shared/services/services.component';
// import { AddEmployeeComponent } from './feature/add-employee/add-employee.component';
import          { HomeUsersComponent } from './feature/home/home-users/home-users.component';
import { HomeComponent } from './feature/home/home.component';
import { AddEmployeeComponent } from './feature/home/Components/add-employee/add-employee.component';

// import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeatureComponent,
    // FlightsComponent,
    // HomeComponent,
    ServicesComponent,
    AddEmployeeComponent,
    HomeUsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthRoutingModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    
    // MatCardModule,
  ],
  exports:[
    HomeUsersComponent
  ],
  

  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
