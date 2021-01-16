import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLogoinComponent } from './components/adminLogoin/adminLogoin.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { KategorilerComponent } from './components/kategoriler/kategoriler.component';
import { UrunlerDetayComponent } from './components/urunlerDetay/urunlerDetay.component';
import { SepetimComponent } from './components/sepetim/sepetim.component';



const redirectLogin = () => redirectUnauthorizedTo(['login'])  //atama sayfası
const routes: Routes = [
  //admin routing başlangıç
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  { path: 'adminlogin', component: AdminLogoinComponent },
  //admin router bitiş


  //login başlangıç
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  //login bitiş


  //ortak alan başlangıç
  { path: 'Anasayfa', component: ProductComponent },
  { path: 'kategoriler', component: KategorilerComponent },
  //ortak alan bitiş


  //uyelikle girilmesi gereken kişiye özel alan başlangıç
  {
    path: 'sepetim/:key', component: SepetimComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'urundetay/:key',
    component: UrunlerDetayComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  //uyelikle girilmesi gereken kişiye özel alan bitiş
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
