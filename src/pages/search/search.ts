import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../services/user.service';
import { UserInfoPage } from '../user-info/user-info';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  user: any;

  constructor(public navCtrl: NavController, public userService: UserService) {
    
  }

  getUser(ev: any) {
    const login = ev.target.value;
    this.userService.getUser(login).subscribe(response => {
      this.user = response;
      this.viewUser(this.user);
    })
  }

  viewUser(user){
    this.navCtrl.push(UserInfoPage, {
      user: user
    })
  }

}
