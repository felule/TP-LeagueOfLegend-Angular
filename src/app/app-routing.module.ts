import { NouveauChampionComponent } from './nouveau-champion/nouveau-champion.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListChampionComponent } from './list-champion/list-champion.component';

const routes: Routes = [
  {
    path: '',
    component: ListChampionComponent
  },
  {
    path: 'nouveau',
    component: NouveauChampionComponent
  }

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
