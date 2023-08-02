import { Component,Input, SimpleChanges,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
// import { AddEmployeeComponent } from './feature/home/Components/add-employee/add-employee.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEmployeeComponent } from '../Components/add-employee/add-employee.component';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-home-users',
  templateUrl: './home-users.component.html',
  styleUrls: ['./home-users.component.scss'],
  standalone:false,
  
  
})
export class HomeUsersComponent {
  data:any[]=[]
  @Output() newItem= new EventEmitter<any>();
 constructor(public dialog: MatDialog){}


@Input() dataSource:any;

displayedColumns: string[] = [
  'name',
  'lastname',
  'date',
  'gender',
  'email',
  'phone',
'Action',
];
ngOnInit(){
  let loacaldata:any=localStorage.getItem('userdetail')
  let allusers=JSON.parse(loacaldata)
 this. data=allusers
}
ngOnChanges(simple: SimpleChanges){
}
openDialog(): void {
  this.dialog.open(AddEmployeeComponent, {
    height: '500px',
    width: '600px',
    
  
  });
}
delete(value: any,i:any) {
  if(confirm("Are You sure want to delete the data ")){
    let data={
      value:value,
      id:i
    };
    this.newItem.emit(data)
  }
  
}

}