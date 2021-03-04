import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MyformsComponent } from './myforms/myforms.component';
import { NotFountComponent } from './not-fount/not-fount.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component:ProductsComponent },
  { path: 'products', component:ProductsComponent},
  { path: 'details', component:DetailsComponent},
  { path: 'users', component: MyformsComponent},
  { path: '**', component:NotFountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
