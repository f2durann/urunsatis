import { FbserviceService } from './../services/fbservice.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  adsoyad: string = "";
  uid: string = "";
  constructor(public fbServis: FbserviceService
  ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user") || '{}');
    this.uid = user.uid;
    this.adsoyad = user.displayName;
  }


}
