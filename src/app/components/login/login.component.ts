import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sonuc } from '../models/sonuc';
import { FbserviceService } from '../services/fbservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
        this.router.navigate(['/Anasayfa']);
        alert("Giriş Başarılı");
      }
    }, () => {
      this.sonuc.islem = false;
      this.sonuc.mesaj = "E-Posta Adresi veya Parola Geçersizdir!";
    });
  }
}

