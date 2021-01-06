import { Uye } from './../models/uye';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sonuc } from '../models/sonuc';
import { FbserviceService } from '../services/fbservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  sonuc: Sonuc = new Sonuc();
  secUye: Uye = new Uye();
  constructor(
    public fbservis: FbserviceService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  UyeOl() {
    this.fbservis.UyeOl(this.secUye).then((d: any) => {
      d.user.updateProfile({
        displayName: this.secUye.adsoyad
      });
      this.secUye.uid = d.user.uid;
      localStorage.setItem("user", JSON.stringify(d.user));
      this.UyeEkle();
    }, err => {
      this.sonuc.islem = false;
      this.sonuc.mesaj = "Hata Oluştu! lütfen eposta adresinizin doğru olduğundan ve en az 6 haneli parola girdiğinizden emin olup! Ardından tekrar deneyiniz.";
    })
  }
  UyeEkle() {  //altrutin
    this.fbservis.UyeEkle(this.secUye).then(d =>
      this.router.navigate(['/']));
  }
}
