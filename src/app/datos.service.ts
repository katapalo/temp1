import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DatosService {

  filtros: any[] = [
    {
      //vacio
    }  
  ];

  datos: any[] = [
    {
      "id": 1,
      "first_name": "Sebastian",
      "last_name": "Eschweiler",
      "email": "sebastian@codingthesmartway.com"
    },
    {
      "id": 2,
      "first_name": "Steve",
      "last_name": "Palmer",
      "email": "steve@codingthesmartway.com"
    },
    {
      "id": 3,
      "first_name": "Ann",
      "last_name": "Smith",
      "email": "ann@codingthesmartway.com"
    }
  ];

  datos2: any[] = [ ];
  headers: Headers;
  options: RequestOptions;
  readonly url = "http://192.168.117.16:8080/api/1/";
  
  constructor(private http: Http) { 
    this.headers = new Headers();
    this.headers.append('Content-Type','application/json'); 
    this.options = new RequestOptions();
    this.options.headers = this.headers;
  }

  getDatos(sqlId: number): Observable<any> {
    console.log("Filtros: "+this.filtros)
    
    //let res = this.http.post(this.url+sqlId,{},this.options).subscribe(val => console.log("valor: ",val.json()));
    //this.http.post(this.url+sqlId,{},this.options).subscribe(val => { return val; });        
    return this.http.post(this.url+sqlId,{},this.options);        

   // this.http.post(url,{},options).subscribe(
   //   response => {
    //    console.log("Respuesta: "+response);
    //    },
    //  error => console.log(error)
   // );
  }


  /*
  postDatos(){
    console.log("Filtros: "+this.filtros)
    let url = "http://10.254.4.12:8080/api/1/1";
    this.http.post(url, this.filtros).subscribe(
      response => {
        console.log("Respuesta: "+response.json());
        },
      error => console.log(error)
    );
  }
  */

  getDatos2() {
    return this.datos;
  }

  getDato2() {
   // this.postDatos();
    return this.datos2;
  }

}
