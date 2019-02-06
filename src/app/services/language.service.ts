import { Injectable } from '@angular/core';
import { Language } from '../interfaces/language';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languages: Language[] = [
    {
      id: 1,
      name: 'English',
      shorthand: 'EN'
    },
    {
      id: 2,
      name: 'Spanish',
      shorthand: 'ES'
    },
    {
      id: 3,
      name: 'Russian',
      shorthand: 'RU'
    }
  ];

  constructor() {}

  public getLanguage(id) {
    return this.languages.filter(language => {
      return language.id === +id;
    })[0];
  }

  public getLanguages(): any {
    const languagesObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.languages);
      }, 1000);
    });

    return languagesObservable;
  }
}
