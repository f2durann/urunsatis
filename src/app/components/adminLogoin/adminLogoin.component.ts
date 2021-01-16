import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sonuc } from '../models/sonuc';
import { FbserviceService } from '../services/fbservice.service';

@Component({
  selector: 'app-adminLogoin',
  templateUrl: './adminLogoin.component.html',
  styleUrls: ['./adminLogoin.component.scss']
})
export class AdminLogoinComponent implements OnInit {
  sonuc: Sonuc = new Sonuc();
  constructor(
    public fbservis: FbserviceService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  GirisYap(mail: string, parola: string) {
    this.fbservis.OturumAc(mail, parola).then((d: { user: any; }) => {
      if (d.user) {
        localStorage.setItem("user", JSON.stringify(d.user));
        this.router.navigate(['/admin']);
      }
    }, () => {
      this.sonuc.islem = false;
      this.sonuc.mesaj = "E-Posta Adresi veya Parola Geçersizdir!";
    });
  }
  GirisYapAdmin(mail: string, parola: string) {
    if (mail == "admin@gmail.com" && parola == "123456") {
      this.fbservis.OturumAc(mail, parola).then((d: { user: any; }) => {
        if (d.user) {
          localStorage.setItem("user", JSON.stringify(d.user));
          this.router.navigate(['/admin']);
        } else { alert("hatalı giriş") }
      });

    } else {
      alert("Kaçak Giriş Gibi Gözüküyor. Müşteri sayfasına yönlendiriliyorsunuz ")

      this.router.navigate(['/login']);
    }
  }
}
