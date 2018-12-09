import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOAD_USERS = '[Users] Load Users';
export const LOAD_USERS_FAIL = '[Users] Load Users Fail';
export const LOAD_USERS_SUCCESS = '[Users] Load Users Success';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersFail implements Action {
  readonly type = LOAD_USERS_FAIL;
  constructor(public payload: any) {}
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}

// action types
export type UserAction = LoadUsers | LoadUsersFail | LoadUsersSuccess;


// export const GET_ALL_USERS = '[USER] get all users';
// export const GET_USER = '[USER] get single user'

// export class getAllUsers implements Action {
//   readonly type = GET_ALL_USERS

//   constructor(public payload: User[]) {

//   }
// }

// export class getUser implements Action {
//   readonly type = GET_USER

//   constructor(public payload: User) {

//   }
// }

// export type Actions = getAllUsers | getUser