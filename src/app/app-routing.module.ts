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
import { KartVeAdresBilgisiComponent } from './components/kartVeAdresBilgisi/kartVeAdresBilgisi.component';


const redirectLogin = () => redirectUnauthorizedTo(['login'])  //atama sayfası
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'Anasayfa', component: ProductComponent },
  // {
  //   path: '',
  //   component: ProductComponent,
  //   canActivate: [AngularFireAuthGuard],
  //   data: {
  //     authGuardPipe: redirectLogin
  //   }
  // },
  { path: 'adminlogin', component: AdminLogoinComponent },
  { path: 'kategoriler', component: KategorilerComponent },
  { path: 'sepetim', component: SepetimComponent },
  {
    path: 'urundetay/:key',
    component: UrunlerDetayComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'adresvekartbilgisi',
    component: KartVeAdresBilgisiComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
