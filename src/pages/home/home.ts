import {FirebaseProvider} from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  IncomeStatement: FirebaseListObservable<any[]>;
  newItem='';

  constructor(public navCtrl: NavController, public FirebaseProvider: FirebaseProvider) {
   this.IncomeStatement=this.FirebaseProvider.getIncomeStatement();
  }

  addItem(){
    this.FirebaseProvider.addItem(this.newItem);
  }

  removeItem(id){
    this.FirebaseProvider.removeItem(id);
  }

}
