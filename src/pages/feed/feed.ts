import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../app/services/user.service';
import { UserInfoPage } from '../user-info/user-info';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  users: any[];
  since: number;

  constructor(public navCtrl: NavController, private userService: UserService) {
    this.users = [];
    this.since = 0;
  }

  ngOnInit() {
    this.getAllUsers(this.since);
  }

  getAllUsers(since) {
    this.userService.getAllUsers(this.since).subscribe(response => {
      console.log(response);
      response.forEach(user => this.getUser(user.login));
    })
    console.log(this.users);
  }

  viewUser(user){
    this.navCtrl.push(UserInfoPage, {
      user: user
    })
  }

  getUser(login) {
    this.userService.getUser(login).subscribe(response => {
      this.users.push(response);
    })
  }

  addUsersOnScroll(infiniteScroll) {
    this.since = this.users[this.users.length-1].id;
    console.log("Begin async operation");
    setTimeout(() => {
      this.getAllUsers(this.since);
      infiniteScroll.complete();
    }, 500);
  }
}
