import { Urun } from './../models/urun';
import { Uye } from './../models/uye';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth';
import { Kategory } from '../models/kategori';

@Injectable({
  providedIn: 'root'
})
export class FbserviceService {
  private dbKayit = '/Urunler';
  private dbUye = '/Uyeler';
  private dbkategory = '/Kategory';
  kayitRef: AngularFireList<Urun>;
  uyeRef: AngularFireList<Uye>;
  kategoryRef: AngularFireList<Kategory>;
  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.kayitRef = db.list(this.dbKayit);
    this.uyeRef = db.list(this.dbUye);
    this.kategoryRef = db.list(this.dbkategory);
  }

  //Oturum İşlemleri Başlangıç!
  OturumAc(mail: string, parola: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, parola);
  }

  OturumKontrol() {
    if (localStorage.getItem("user")) {
      return true;
    }
    else {
      return false;
    }
  }
  OturumKapat() {
    return this.afAuth.signOut();
  }
  //Oturum işlemleri Bitiş!




  //Üye İşlemleri Bşlangı!
  UyeEkle(uye: Uye) {
    return this.uyeRef.push(uye);
  }
  UyeOl(uye: Uye) {
    return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
  }
  //Üye İşlemleri Bitiş!

  //urun işlemleri başlangıç
  UrunEkle(u: Urun): any {
    return this.kayitRef.push(u);
  }
  UrunDuzenle(urun: Urun) {
    return this.kayitRef.update(urun.key, urun);
  }
  UrunSil(key: string): Promise<void> {
    return this.kayitRef.remove(key);
  }
  UrunLisetele() {
    return this.kayitRef;
  }
  UrunFiltrele() {
    return this.kayitRef;
  }
  UrunListeleByUID(uid: string) {
    return this.db.list("/Urunler", q => q.orderByChild("uid").equalTo(uid));

  }
  UrunByKey(key: string) {
    return this.db.object("/Urunler/" + key);
  }
  //urun işlemleri bitiş




  // kategory bölüm başlangucı

  KategoryEkle(k: Kategory): any {
    return this.kategoryRef.push(k);
  }
  KatLisetele() {
    return this.kategoryRef;
  }
  // kategory bölüm bitişi







}


