import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './Sign-up.component.html',
  styleUrls: ['./Sign-up.component.scss']
})
export class SignupComponent implements OnInit {
  data:any[]=[]
  SignIn:any
 FormGroup:any
  hide = false
  constructor(){

  }

// SignIn= new FormGroup(
//  {
//   name : new FormControl('',[Validators.pattern(/\s/)]),
//    LastName: new FormControl('',[Validators.pattern(/\s/)]),
//    email : new FormControl('',[Validators.required,Validators.email]),
//    password: new FormControl('', Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')),
//  }

// );


  ngOnInit() : void{




     this.SignIn  = new FormGroup(
     {
      name : new FormControl('',[Validators.required,]),
        LastName: new FormControl('',[Validators.required]),
          email : new FormControl('',[Validators.required,Validators.email]),
         password: new FormControl('',[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')])
        }
      
    
     );
    
     }
     Login(){
      if (this.SignIn.invalid) {
        this.SignIn.markAsTouched();}
    else{
      this.data.push(this.SignIn.value);
      console.log(this.SignIn.value)
   localStorage.setItem("users",JSON.stringify(this.data));
   console.log(this.data)
      
          }    }     
    }
                                                                                                                                               
