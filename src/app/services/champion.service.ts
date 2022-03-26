import { Champion } from './../models/champion.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  private customeChampions: Champion[] = [];

  constructor() { }

  addCustomeChampion(champion: Champion): void {
    this.customeChampions.push(champion);
  }

  deleteCustomeChampion(champion: Champion): void {
    const index = this.customeChampions.findIndex( (champ) => champ.name === champion.name);
    this.customeChampions.splice(index, 1);
  }

  getCustomeChampion(): Champion[] {
    return this.customeChampions;
  }
}
