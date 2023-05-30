import { Component, Input } from '@angular/core';
import { productItem } from 'src/app/model/productItem';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: productItem = new productItem(0, '', '', 0);
}
