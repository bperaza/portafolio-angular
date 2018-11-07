import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../_services/productos.service';
import { DetalleProducto } from '../_models/detalle-producto';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  detalleProducto: DetalleProducto;
  id: string;

  constructor(private route: ActivatedRoute,
              public productosService: ProductosService) { }

  ngOnInit() {

    this.route.params
      .subscribe(parametros => {
        //  console.log('Parametro =', parametros['id']);
        this.productosService.getProducto(parametros['id'])
              .subscribe ( (resp: DetalleProducto) => {
                    this.detalleProducto = resp;
                    this.id = parametros['id'];
                    console.log(resp);

              });

      });
  }

}
