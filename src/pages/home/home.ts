import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /*images = ['1.jpg','2.jpg','3.jpg','4.jpg'];*/

  constructor(public navCtrl: NavController, public restProvider: RestProvider){
    this.getBebidas();
  }

 bebidas: any;

 getBebidas() {
  this.restProvider.getBebidas()
  .then(data => {
    this.bebidas = data;
    console.log(this.bebidas);
  });
}
}
