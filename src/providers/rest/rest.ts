import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://ec2-54-213-137-161.us-west-2.compute.amazonaws.com:2403';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getBebidas() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/bebidas').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  addBebida(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/bebidas', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  

}
