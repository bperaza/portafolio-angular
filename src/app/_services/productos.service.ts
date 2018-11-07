import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducto } from '../_models/IProducto';
import { DetalleProducto } from '../_models/detalle-producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargado = false;
  productos: IProducto [] = [];
  productosFiltrados: IProducto [] = [];

  constructor(private http: HttpClient) {

    this.cargarProductos();
  }

  cargarProductos () {
    return new Promise( (resolve, reject) => {
      this.http.get ('https://angular-html-eebc1.firebaseio.com/productos_idx.json')
      .subscribe((resp: IProducto[]) => {
        this.productos = resp;
        console.log('Productos: ', resp);
        this.cargado = true;
        resolve();
      });
    });

  }

  getProducto (id: string) {
    // Para regresar el Observable
    return this.http.get (`https://angular-html-eebc1.firebaseio.com/productos/${ id }.json`);

    // this.http.get ('https://angular-html-eebc1.firebaseio.com/productos/' + id + '.json');

  }

  buscarProductos(texto: string) {
    if (this.productos.length === 0) {
      // Esperar a que sean cargados los productos
      this.cargarProductos().then( () => {
          // este codigo se ejecuta despues de tener los productos
          // Ahora si aplicamos el Filtro
          this.filtrarProductos(texto);
      });
    } else {
      // aplicar el filtro
      this.filtrarProductos(texto);
    }

  }

  filtrarProductos (termino: string) {
    this.productosFiltrados = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach( prod => {
       const tituloLower = prod.titulo.toLocaleLowerCase();
       if ( prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
          this.productosFiltrados.push (prod);
       }
    });

    console.log('Productosfiltrado=', this.productosFiltrados);
  }
}

