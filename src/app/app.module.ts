import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './parentchildcommunication/product/product.component';
import { ProductcreateComponent } from './parentchildcommunication/productcreate/productcreate.component';
import { ProductlistComponent } from './parentchildcommunication/productlist/productlist.component';
import { ProductlistitemComponent } from './parentchildcommunication/productlistitem/productlistitem.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductcreateComponent,
    ProductlistComponent,
    ProductlistitemComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
