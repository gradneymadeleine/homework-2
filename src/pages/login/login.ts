import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductsPage } from '../products/products';


@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {
  public username: string;
  public password: string;
  
  public names: Array<string>;
  public names2: string[];

  public complexObject: any;
  public flag: boolean=true;

  
  constructor(public navCtrl: NavController) {
    this.username = "gradneymadeleine";

    this.names = [];
    this.names2 = [];

  }
  signin(argument1:string, argument2:number){
    console.log("The username is:"+this.username);

    console.log("Argument 1:", argument1);
    console.log("Argument 2:", argument2)


  }
  

  navigateToProducts() {
    console.log("Navigating...");
    this.navCtrl.push(ProductsPage);
    }
 }
