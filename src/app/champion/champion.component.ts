import { RiotApiService } from './../services/riot-api.service';
import { Champion } from './../models/champion.model';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent implements OnInit, OnChanges {

  @Input()
  public champion!: Champion;

  @Input()
  public index!: number;

  @Output()
  public clickEvent = new EventEmitter<number>();

  constructor(private riotApiService: RiotApiService) { }

  ngOnInit(): void {
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['champion']?.currentValue){
      if(!this.champion?.img)
        this.getIconChampion();
    }
  }

  getIconChampion(): void {
    if(!this.champion.id){
      console.error('id du champion non definie');
      return;
    }

    this.riotApiService.getSquareAssetByName(this.champion?.id).subscribe( (blob:Blob) => {
      this.createImageFromBlob(blob);
    });
  }

  /**
   * Creation d'une image à partir d'un blob
   * @param image image à crée
   */
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.champion.img = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
  }

  /**
   * Action suite au click sur le champion
   */
  action(): void {
    this.clickEvent.emit(this.index);
  }

}
