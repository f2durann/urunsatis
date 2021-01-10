import { Uye } from './../models/uye';
import { Urun } from './../models/urun';
import { Component, OnInit } from '@angular/core';
import { FbserviceService } from '../services/fbservice.service';
import { Router } from '@angular/router';
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

  // urunAra() {
  //   this.fbservis.UrunFiltrele(this.urun).then
  //  }

  addToCard() {
    alert("Ürün Spete Eklendi")
  }
  SepeteEkle() {
    // this.uyebilgi=this.fbservis.OturumKontrol(localStorage.getItem(this.user));
    // this.fbservis.SepetEkle(Uuyebilgiye);
  }



}
