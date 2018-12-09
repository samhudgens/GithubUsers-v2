import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../services/user.service';
import { UserInfoPage } from '../user-info/user-info';

// Redux imports
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store'
import { User } from '../../models/user.model';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  users: User[];
  since: number;

  constructor(public navCtrl: NavController, private userService: UserService, private store: Store<fromStore.UsersCollectionState>) {
    this.users = [];
    this.since = 0;
  }

  ngOnInit() {
    this.getAllUsers(this.since);
    this.store.select<any>('users').subscribe(state => {
      console.log(state);
    })
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
      console.log(response.public_repos);
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
