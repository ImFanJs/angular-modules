import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/components/header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { LanguageModule } from './pages/language/language.module';
import { UserModule } from './pages/user/user.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, LanguageModule, UserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
