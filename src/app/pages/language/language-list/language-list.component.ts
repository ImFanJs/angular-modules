import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/interfaces/language';
import { LanguageService } from 'src/app/services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styles: []
})
export class LanguageListComponent implements OnInit {
  languages: Language[];

  constructor(
    private languageService: LanguageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.languageService.getLanguages().subscribe((data: Language[]) => {
      this.languages = data;
    });
  }

  goToItem(e, id: Number) {
    this.router.navigate([`/languages/${id}`]);
  }
}
