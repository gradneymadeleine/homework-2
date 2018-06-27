import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudioPage } from '../studio/studio';
import {CeramicPage} from '../ceramic/ceramic';
import {GlassPage} from '../glass/glass';



@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  navigateToStudio() {
    console.log("Navigating...");
    this.navCtrl.push(StudioPage);
    }
    navigateToCeramic() {
      console.log("Navigating...");
      this.navCtrl.push(CeramicPage);
      }
      navigateToGlass() {
        console.log("Navigating...");
        this.navCtrl.push(GlassPage);
        }

  

}
