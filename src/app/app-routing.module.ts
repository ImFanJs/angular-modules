import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageComponent } from './pages/language/language.component';
import { LanguageFormComponent } from './pages/language/language-form/language-form.component';
import { UserComponent } from './pages/user/user.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';

const routes: Routes = [
  {
    path: 'languages',
    component: LanguageComponent
  },
  {
    path: 'languages/:id',
    component: LanguageFormComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'users/:id',
    component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
