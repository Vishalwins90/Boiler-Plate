import { Component, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
 mySubject = new Subject<any>()
  
}
