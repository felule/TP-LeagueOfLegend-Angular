import { ServiceModule } from './services/service.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListChampionComponent } from './list-champion/list-champion.component';
import { AppRoutingModule } from './app-routing.module';
import { ChampionComponent } from './champion/champion.component';
import { NouveauChampionComponent } from './nouveau-champion/nouveau-champion.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListChampionComponent,
    ChampionComponent,
    NouveauChampionComponent
  ],
  imports: [
    BrowserModule,
    ServiceModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
