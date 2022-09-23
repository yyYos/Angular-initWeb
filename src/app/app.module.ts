import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtomCustomerComponent } from './buttom-customer/buttom-customer.component';
import { ListCustomComponent } from './list-custom/list-custom.component';
import { HeaderComponent } from './header/header.component';
import { NewItemListComponent } from './new-item-list/new-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtomCustomerComponent,
    ListCustomComponent,
    HeaderComponent,
    NewItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
