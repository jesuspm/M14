import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';



/*import { ApiService } from '../api.service';
*/
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  constructor(
    public _apiService: ApiService
  ) { }
 
  ngOnInit() {
  }

  titulo;
  genero;
  temporadas;

  addSerie(){
      let data = {
        titulo: this.titulo,
        genero: this.genero,
        temporadas: this.temporadas
        
      }
    console.log(data.titulo, data.genero, data.temporadas);
    this._apiService.addSerie(data).subscribe((response) => {
      console.log(response);
    });
  }
 
}

