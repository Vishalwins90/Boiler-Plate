import { Component,Input, SimpleChange } from '@angular/core';


@Component({
  selector: 'app-home-users',
  templateUrl: './home-users.component.html',
  styleUrls: ['./home-users.component.scss']
})
export class HomeUsersComponent {
  
@Input() dataSource:any;

displayedColumns: string[] = [
  'name',
  'lastname',
  'date',
  'gender',
  'email',
  'phone',
];

ngOnChanges(simple: SimpleChange){
  debugger
}
}
