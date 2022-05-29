import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './parentchildcommunication/product/product.component';
import { ProductcreateComponent } from './parentchildcommunication/productcreate/productcreate.component';
import { ProductlistComponent } from './parentchildcommunication/productlist/productlist.component';
import { ProductlistitemComponent } from './parentchildcommunication/productlistitem/productlistitem.component';
import { HeroesComponent } from './heroapp/heroes/heroes.component';
import { HeroDetailComponent } from './heroapp2/hero-detail/hero-detail.component';
import { HeroListComponent } from './heroapp2/hero-list/hero-list.component';
import { MessagesComponent } from './heroapp2/messages/messages.component';
import { HeroDashboardComponent } from './heroapp2/hero-dashboard/hero-dashboard.component';
import { CreateHeroComponent } from './heroapp2/create-hero/create-hero.component';
import { FormPractiseComponent } from './useofngform/form-practise/form-practise.component';
import { ShowUsersComponent } from './assignments/number5/show-users/show-users.component';
import { ActiveUsersComponent } from './assignments/number5/active-users/active-users.component';
import { InactiveUsersComponent } from './assignments/number5/inactive-users/inactive-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductcreateComponent,
    ProductlistComponent,
    ProductlistitemComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroListComponent,
    MessagesComponent,
    HeroDashboardComponent,
    CreateHeroComponent,
    FormPractiseComponent,
    ShowUsersComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
