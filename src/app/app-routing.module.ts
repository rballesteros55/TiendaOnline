import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { CarrouselComponent } from './component/carrousel/carrousel.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'producto',
    component: ProductItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [HomeComponent, ProductItemComponent, CarrouselComponent],
})
export class AppRoutingModule {}
