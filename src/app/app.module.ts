import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTopComponent } from './components/app-top/app-top.component';
import { AppBottomComponent } from './components/app-bottom/app-bottom.component';
import { AppCorpoComponent } from './components/app-corpo/app-corpo.component';
import { AppCardapioComponent } from './components/app-cardapio/app-cardapio.component';
import { AppLocalComponent } from './components/app-local/app-local.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopComponent,
    AppBottomComponent,
    AppCorpoComponent,
    AppCardapioComponent,
    AppLocalComponent,
    BebidasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
