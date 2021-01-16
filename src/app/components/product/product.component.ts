import { Sonuc } from './../models/sonuc';
import { Uye } from './../models/uye';
import { Urun } from './../models/urun';
import { Component, OnInit } from '@angular/core';
import { FbserviceService } from '../services/fbservice.service';
import { Router, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { using } from 'rxjs';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  adsoyad: string = "";
  uid: string = "";
  urunler: Urun[] = [];
  uyebilgi: String = "";
  secUrunSepeteEkele: Uye = new Uye();
  constructor(
    public fbservis: FbserviceService,
    public Router: Router
  ) { }
  user: string = "";
  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user") || '{}');
    this.uid = user.uid;
    this.adsoyad = user.displayName;
    this.UrunleriListele();
  }
  UrunleriListele() {
    this.fbservis.UrunLisetele().snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map((c: { payload: { key: any; val: () => any; }; }) =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe((data: any) => {
      this.urunler = data;
    });
  }
  SepeteEkle() {
    alert("sepete eklendi");
  }





}
