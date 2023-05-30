import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { CarrouselComponent } from 'src/app/component/carrousel/carrousel.component';
import { ProductItemComponent } from 'src/app/component/product-item/product-item.component';

@NgModule({
  imports: [CarrouselComponent, ProductItemComponent],
  exports: [],
  declarations: [HomeComponent, CarrouselComponent, ProductItemComponent],
  providers: [],
})
export class HomeModule {}
