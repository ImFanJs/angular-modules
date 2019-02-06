import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/interfaces/language';
import { LanguageService } from 'src/app/services/language.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styles: []
})
export class LanguageFormComponent implements OnInit {
  language: Language;

  constructor(
    private languageService: LanguageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.language = this.languageService.getLanguage(data.id);
    });
  }
}
