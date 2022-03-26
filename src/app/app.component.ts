import { RiotApiService } from './services/riot-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TP-LeagueOfLegend-Angular';

  img!: any;
  
  constructor(private riotApiService: RiotApiService) { }

  ngOnInit(): void {
    this.riotApiService.getAllChampions().subscribe( (champions) => console.log(champions));
    this.riotApiService.getSquareAssetByName('Aatrox').subscribe((img) => this.createImageFromBlob(img));
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.img = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

}
