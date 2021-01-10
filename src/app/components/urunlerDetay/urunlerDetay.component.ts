import { Urun } from './../models/urun';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FbserviceService } from '../services/fbservice.service';

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
    })
  }
  UrunGetir() {
    this.fbservis.UrunByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secUrun = (y as Urun);
    });
  }
}
