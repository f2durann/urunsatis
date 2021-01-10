import { Component, OnInit } from '@angular/core';
import { Urun } from '../models/urun';
import { FbserviceService } from '../services/fbservice.service';

@Component({
  selector: 'app-sepetim',
  templateUrl: './sepetim.component.html',
  styleUrls: ['./sepetim.component.scss']
})
export class SepetimComponent implements OnInit {
  key: string = "";
  secUrun: Urun = new Urun();
  urunler: Urun[] = [];
  constructor(public fbservis: FbserviceService) { }

  ngOnInit() {
  }
  sepeteurungetir() {
    this.fbservis.UrunByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secUrun = (y as Urun);
    });
  }
}
   //seckayıtdan alınan keyi kullan