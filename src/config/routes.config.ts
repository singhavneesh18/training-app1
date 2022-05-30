import { Routes } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { ShowUsersComponent } from "src/app/assignments/number5/show-users/show-users.component";
import { HeroesComponent } from "src/app/heroapp/heroes/heroes.component";
import { HeroDashboardComponent } from "src/app/heroapp2/hero-dashboard/hero-dashboard.component";
import { NotFoundComponent } from "src/app/not-found/not-found.component";
import { ProductComponent } from "src/app/parentchildcommunication/product/product.component";
import { FormPractiseComponent } from "src/app/useofngform/form-practise/form-practise.component";

export const AppRoutingModule: Routes = [
    {path: '', component: AppComponent},
    {path: 'productComponent', component: ProductComponent},
    {path: 'heroesComponent', component: HeroesComponent},
    {path: 'heroDashboardComponent', component: HeroDashboardComponent},
    {path: 'formPractiseComponent', component: FormPractiseComponent},
    {path: 'showUsersComponent', component: ShowUsersComponent},
    {path: '**', component: NotFoundComponent}
]