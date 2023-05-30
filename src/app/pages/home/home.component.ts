import { Component } from '@angular/core';
import { productItem } from 'src/app/model/productItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  listaProductItem: productItem[] = [
    new productItem(
      1,
      'Fairy platinum',
      'El mejor gel limpiador de vajilla',
      1.5
    ),
    new productItem(2, 'Pan bimbo', 'Pan bimbo con bordes', 2.1),
    new productItem(3, 'Nutella', 'Crema de cacao', 3),
  ];
}
