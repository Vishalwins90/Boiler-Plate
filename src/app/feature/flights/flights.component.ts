import { Component } from '@angular/core';
import { ServicesComponent } from 'src/app/shared/services/services.component';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent {
  count=1
  constructor(private _desigenServices:ServicesComponent){

  }
  Addname(){
this.count++;
this._desigenServices.mySubject.next(this.count);
  }
}
