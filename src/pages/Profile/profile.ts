import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {ProductsPage} from '../products/products';

@Component({
  selector: 'page-home',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {}
 
  navigateToHome() {
    console.log("Navigating...");
    this.navCtrl.push(HomePage);
    }
    
  navigateToProducts() {
    console.log("Navigating...");
    this.navCtrl.push(ProductsPage);
    }
 
 }
