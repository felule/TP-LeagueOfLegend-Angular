import { ChampionService } from './../services/champion.service';
import { Champion } from './../models/champion.model';
import { RiotApiService } from './../services/riot-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-champion',
  templateUrl: './list-champion.component.html',
  styleUrls: ['./list-champion.component.css']
})
export class ListChampionComponent implements OnInit {

  public champions!: Champion[];
  public yours!: Champion;

  constructor(
    private riotApiSerivce: RiotApiService,
    private championService: ChampionService,
    ) { }

  ngOnInit(): void {
    this.getAllChampions();
  }

  getAllChampions(): void{
    this.riotApiSerivce.getAllChampions().subscribe((champions: Champion[]) => {
      console.log(this.championService.getCustomeChampion());
      this.champions = [...champions, ...this.championService.getCustomeChampion()]
      this.anotherOne();
    })
  }

  suppression(index: number){
    console.log(index);
    this.champions.splice(index, 1);
  }

  /**
   * Tire un nouveau champion au hazard
   */
  anotherOne() {
    const index = Math.floor(Math.random() * (this.champions.length + 1));
    this.yours = this.champions[index]
  }

}
