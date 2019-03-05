import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerComponent } from './customer/customer.component';
import { RouterModule } from '@angular/router'
import { CustomerService } from './core/services/customer.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'customer', component: CustomerComponent},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent],
  providers: [
    CustomerService
  ]
})
export class AppModule { }
