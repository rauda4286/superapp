import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  /*apiUrl = 'http://ec2-54-213-137-161.us-west-2.compute.amazonaws.com:2403';*/

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

obtenerDatos(){
  return this.http.get('http://ec2-54-213-137-161.us-west-2.compute.amazonaws.com:2403/bebidas');
}

}
