import { FbserviceService } from './components/services/fbservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'urunsatis';
  constructor(public fbservis: FbserviceService) {

  }
}
