import { Component, OnInit } from '@angular/core';
import { InfoService } from '../_services/info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoService: InfoService,
              private router: Router) { }

  ngOnInit() {
  }

  buscarProducto(texto: string) {
      console.log(texto);
      if (texto.length > 1) {
        this.router.navigate(['/search', texto]);
      }
  }

}
