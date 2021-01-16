import { Urun } from './../models/urun';
import { Sonuc } from '../models/sonuc';
import { Component, OnInit } from '@angular/core';
import { FbserviceService } from '../services/fbservice.service';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  urunler: any;
  kategoryler: any;
  secKayit: Urun = new Urun();

  sonuc: Sonuc = new Sonuc();
  urun: any;
  kategory: any;
  constructor(
    public fbservis: FbserviceService
  ) { }

  ngOnInit() {
    this.UrunleriListele();
    this.secKayit.key = null;

  }
  UrunleriListele() {
    this.fbservis.UrunLisetele().snapshotChanges().pipe(
      map(changes =>
        changes.map((c: { payload: { key: any; val: () => any; }; }) =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe((data: any) => {
      this.urunler = data;
    });
  }
  UrunDuzenle(urun: Urun) {
    Object.assign(this.secKayit, urun);
  }

  KayitSil(urun: Urun) {
    this.fbservis.UrunSil(urun.key).then(() => {
      this.sonuc.islem = true;
      this.sonuc.mesaj = "Kayıt Silindi";
    });
  }
  Kaydet() {


    if (this.secKayit.key == null) {
      this.fbservis.UrunEkle(this.secKayit).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Eklendi";
      });
    }
    else {
      this.fbservis.UrunDuzenle(this.secKayit).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Düzenlendi";
      });
    }
  }
  Vazgec() {
    this.secKayit = new Urun();
    this.secKayit.key = null;
  }
}
