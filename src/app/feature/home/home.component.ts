import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServicesComponent } from 'src/app/shared/services/services.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent {
  
  dataSource: any;
  data: any;
  user: any;

  constructor() {
  }

  // ngOnInit() {
  //   debugger
  //   const data =  localStorage.getItem('user')  || null;
  //   if(data)
  //   this.dataSource = JSON.parse(data)
  // }
}
