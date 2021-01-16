
import { FbserviceService } from './../services/fbservice.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-kategoriler',
  templateUrl: './kategoriler.component.html',
  styleUrls: ['./kategoriler.component.css']
})
export class KategorilerComponent implements OnInit {
  urunler: any;



  constructor(public fbservis: FbserviceService) { }

  ngOnInit() {
    this.UrunleriListele()

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
}
