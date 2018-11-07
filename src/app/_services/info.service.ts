import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../_models/info';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  // info: any = {};
  info: Info;
  equipo: any;
  cargada = false;

  constructor( private http: HttpClient) {
    // Leer el Archivo data.json
    this.cargarInfo();
    this.cargarTeam();
  }

  cargarInfo () {
    this.http.get ('assets/data/data.json')
        .subscribe ( (resp: Info) => {
            this.cargada = true;
            this.info = resp;
            console.log('Info: ', resp);
        });
  }

  cargarTeam() {
    this.http.get ('https://angular-html-eebc1.firebaseio.com/equipo.json')
        .subscribe ( resp => {
            this.cargada = true;
            this.equipo = resp;
            console.log('Equipo:', resp);
        });

  }

}
