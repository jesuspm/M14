import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {
  serie: any =[];
  
  constructor(public _apiService: ApiService
    ) {this.getSerie}

  ngOnInit() {
  }
  remove(i){
    console.log(i);
    this.serie.splice(i, 1);
  }
  getSerie(){
    this._apiService.getSerie().subscribe((response) => {
      console.log(response);
      this.serie = response;
    });
  }
}
