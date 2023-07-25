import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  bind:any=[]=[];
  dat:any=[]=[];

  Add=new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(5)]),
    lastname:new FormControl('',[Validators.required,Validators.minLength(5)]),
    email : new FormControl('',[Validators.required,Validators.email]),
    date:new FormControl('',[Validators.required,Validators.minLength(10)]),
    gender: new FormControl('',[Validators.required]),
    // male:new FormControl('',[Validators.required,Validators.minLength(10)]),
    // female:new FormControl('',[Validators.required,Validators.minLength(10)]),
    // other:new FormControl('',[Validators.required,Validators.minLength(10)]),
    phone:  new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  });
  // Send(){
  //   console.log(this.Add)
  //   this.bind.push(this.Add.value)
  //   localStorage.setItem("user",this.bind);
  //   localStorage.setItem('userInfo', JSON.stringify(this.bind))
  
  // }
  keyPressNumbersDecimal(event:any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
  Send(){
    debugger
    if (this.Add.invalid) {
      this.Add.markAsTouched();}
  else{
    this.bind.push(this.Add.value);
    console.log(this.Add.value)
    localStorage.setItem("user", JSON.stringify(this.bind));
 console.log(this.bind)
    
        }    } 
  
}
