import { SepetimComponent } from './components/sepetim/sepetim.component';
import { UrunlerDetayComponent } from './components/urunlerDetay/urunlerDetay.component';
import { environment } from './../environments/environment';
import { ProductComponent } from './components/product/product.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CategoryComponent } from './components/category/category.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminLogoinComponent } from './components/adminLogoin/adminLogoin.component';
import { KategorilerComponent } from './components/kategoriler/kategoriler.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavComponent,
    CategoryComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    AdminLogoinComponent,
    KategorilerComponent,
    UrunlerDetayComponent,
    SepetimComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
