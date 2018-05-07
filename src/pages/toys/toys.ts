import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToysProvider} from '../../providers/toys/toys';

/**
 * Generated class for the ToysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toys',
  templateUrl: 'toys.html',
})
export class ToysPage {

    juguetes
  constructor(public navCtrl: NavController, public restProvider: ToysProvider){}

  ionViewDidLoad(){
    this.restProvider.obtenerDatos()
    .subscribe(
      (data) => {this.juguetes  = data;},
      (error)=>{console.log(error);}
    )
  
  
  }

}
