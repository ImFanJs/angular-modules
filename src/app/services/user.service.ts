import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: 'Jesus'
    },
    {
      id: 2,
      name: 'Fer'
    },
    {
      id: 3,
      name: 'Isai'
    }
  ];

  constructor() {}

  public getUser(id) {
    return this.users.filter(user => {
      return user.id === +id;
    })[0];
  }

  public getUsers(): any {
    const usersObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.users);
      }, 1000);
    });

    return usersObservable;
  }
}
