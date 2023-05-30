export class productItem {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;

  constructor(id: number, name: string, description: string, price: number) {
    this.id = id;
    this.nombre = name;
    this.descripcion = description;
    this.precio = price;
  }
}
