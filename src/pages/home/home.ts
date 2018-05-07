import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /*images = ['1.jpg','2.jpg','3.jpg','4.jpg'];*/

bebidas
  constructor(public navCtrl: NavController, public restProvider: RestProvider){}

  ionViewDidLoad(){
    this.restProvider.obtenerDatos()
    .subscribe(
      (data) => {this.bebidas  = data;},
      (error)=>{console.log(error);}
    )
  
  
  }


 
}
