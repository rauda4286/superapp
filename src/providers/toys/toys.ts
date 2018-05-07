import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ToysProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToysProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ToysProvider Provider');
  }
  obtenerDatos(){
    return this.http.get('http://ec2-54-213-137-161.us-west-2.compute.amazonaws.com:2403/juguetes');
  }
  

}
