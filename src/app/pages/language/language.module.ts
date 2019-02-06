import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageListComponent } from './language-list/language-list.component';
import { LanguageComponent } from './language.component';
import { LanguageFormComponent } from './language-form/language-form.component';
import { GoBackComponent } from 'src/app/common/components/go-back/go-back.component';

@NgModule({
  declarations: [
    LanguageComponent,
    LanguageListComponent,
    LanguageFormComponent,
    GoBackComponent
  ],
  imports: [CommonModule]
})
export class LanguageModule {}
