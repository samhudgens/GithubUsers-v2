import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'user-info.html'
})
export class UserInfoPage {
  user: any;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.user = params.get('user');
  }

  // here's a comment to make this branch different

}