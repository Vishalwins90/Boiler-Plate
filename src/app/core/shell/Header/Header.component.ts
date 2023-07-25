import { Component,OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'Header-component',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss']
})
export class HeaderComponent implements OnInit{
  data:any
  constructor(private router :Router){
  
  }
  ngOnInit(): void {
    
  }
  submit(){
    let data=localStorage.getItem('user')
    if(data){
      return true
    } 
   else{
    return false

   }



    } 
    Logout(){
      localStorage.removeItem('user');
      this.router.navigate(['/home']);
    } 
    log(){
      let data=localStorage.getItem('user')
      if(data){
        return false
      } 
     else{
      return true
  
     }
    }
  }
  







