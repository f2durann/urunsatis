import { Urun } from './../models/urun';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FbserviceService } from '../services/fbservice.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-urunlerDetay',
  templateUrl: './urunlerDetay.component.html',
  styleUrls: ['./urunlerDetay.component.scss']
})
export class UrunlerDetayComponent implements OnInit {
  key: string = "";
  secUrun: Urun = new Urun();
  urunler: Urun[] = [];



  constructor(
    public route: ActivatedRoute,
    public fbservis: FbserviceService,
    public router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.key = p.key;
      this.UrunGetir();
      this.UrunleriListele();
    })
  }
  UrunGetir() {
    this.fbservis.UrunByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secUrun = (y as Urun);
    });
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