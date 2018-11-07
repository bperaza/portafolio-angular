import { Component } from '@angular/core';
import { InfoService } from './_services/info.service';
import { ProductosService } from './_services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (
      public infoService: InfoService,
      public productosService: ProductosService) {

  }
}
