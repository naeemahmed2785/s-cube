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
import { UserMessageComponent } from './user-message/user-message.component';
import { MessageService } from './core/services/messageService';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerComponent,
    UserMessageComponent
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
    CustomerService, MessageService
  ]
})
export class AppModule { }
