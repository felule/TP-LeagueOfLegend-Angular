import { Champion } from './../models/champion.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { getChampionsRequest } from '../models/riot-request.model';

@Injectable({
  providedIn: 'root'
})
export class RiotApiService {

  constructor(private httpClient: HttpClient) { }

  getAllChampions(): Observable<Champion[]>{
    const url = 'https://ddragon.leagueoflegends.com/cdn/12.5.1/data/fr_FR/champion.json';
    return this.httpClient.get<getChampionsRequest>(url)
    .pipe(map((requete: getChampionsRequest) => {
      let champions: any[] = [];
      Object.entries(requete.data).forEach(([key, value]) => {
        champions.push(new Champion(value?.name, value?.id));
      });
      return champions;
    }
    ));
  }


  getSquareAssetByName(name: string): Observable<Blob> {
    const url = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`;
    return this.httpClient.get(url, {responseType: 'blob'});
  }


}
