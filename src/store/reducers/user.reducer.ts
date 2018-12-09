import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';
import * as fromUsers from '../actions/user.actions';
import { UserService } from '../../services/user.service';


export interface UserState {
  data: User[];
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  data: [
    {
      "login": "samhudgens",
      "id": 17184656,
      "node_id": "MDQ6VXNlcjE3MTg0NjU2",
      "avatar_url": "https://avatars1.githubusercontent.com/u/17184656?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/samhudgens",
      "html_url": "https://github.com/samhudgens",
      "followers_url": "https://api.github.com/users/samhudgens/followers",
      "following_url": "https://api.github.com/users/samhudgens/following{/other_user}",
      "gists_url": "https://api.github.com/users/samhudgens/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/samhudgens/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/samhudgens/subscriptions",
      "organizations_url": "https://api.github.com/users/samhudgens/orgs",
      "repos_url": "https://api.github.com/users/samhudgens/repos",
      "events_url": "https://api.github.com/users/samhudgens/events{/privacy}",
      "received_events_url": "https://api.github.com/users/samhudgens/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Sam Hudgens",
      "company": null,
      "blog": "",
      "location": null,
      "email": null,
      "hireable": null,
      "bio": null,
      "public_repos": 36,
      "public_gists": 0,
      "followers": 2,
      "following": 4,
      "created_at": "2016-02-11T19:53:05Z",
      "updated_at": "2018-10-17T20:23:13Z"
    }
  ],
  loaded: false,
  loading: false,
}

export function reducer(
  state = initialState,
  action: fromUsers.UserAction
): UserState {

  switch(action.type) {
    case fromUsers.LOAD_USERS: {
      return {
        ...state, 
        loading: true
      };
    }
  }

  switch(action.type) {
    case fromUsers.LOAD_USERS_SUCCESS: {
      return {
        ...state, 
        loading: false,
        loaded: true,
      };
    }
  }

  switch(action.type) {
    case fromUsers.LOAD_USERS_FAIL: {
      return {
        ...state, 
        loading: false,
        loaded: false
      };
    }
  }

  return state;
  console.log(state);
}