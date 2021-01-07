import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FbserviceService } from '../services/fbservice.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  urunler: any;

  constructor(public fbservis: FbserviceService) { }
  title = "KATEGORİ LİSTESİ";
  categories: Category[] = [
    { id: 1, name: "Elektronik" },
    { id: 1, name: "Bilgisayar" },
    { id: 1, name: "İletişim" },
    { id: 1, name: "Müzik" },
    { id: 1, name: "İçecek" },
  ]
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
