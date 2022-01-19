import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

 constructor(
   public http: HttpClient
  ) { }

  addSerie(data) {
    return this.http.post('http://localhost/backend/insert.php', data);
  }
  getSerie() {
    return this.http.get('http://localhost/backend/read.php');
  }
 

}

