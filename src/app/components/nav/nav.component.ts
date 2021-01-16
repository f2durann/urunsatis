import { FbserviceService } from './../services/fbservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'protractor';
import { DomElementSchemaRegistry } from '@angular/compiler';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  adsoyad: string = "";
  uid: string = "";
  constructor(public fbServis: FbserviceService,
    public router: Router

  ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user") || '{}');
    this.uid = user.uid;
    this.adsoyad = user.displayName;
  }
  OturumKapat() {
    this.fbServis.OturumKapat().then(d => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    });

  }

}
