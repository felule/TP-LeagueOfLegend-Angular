import { ChampionService } from './../services/champion.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Champion } from '../models/champion.model';
import { ImageSnippet } from './../models/image-snippet.model';

@Component({
  selector: 'app-nouveau-champion',
  templateUrl: './nouveau-champion.component.html',
  styleUrls: ['./nouveau-champion.component.css']
})
export class NouveauChampionComponent implements OnInit {

  public championFormulaire!: FormGroup;
  public champion!: Champion;

  constructor(
    private fb: FormBuilder,
    private championService: ChampionService
    ) { }

  ngOnInit(): void {
    this.championFormulaire = this.fb.group({
      name: ['', Validators.required],
      img: [],
      id: [],
    });
  }

  onSubmit(): void {
    this.championService.addCustomeChampion(this.championFormulaire.value as Champion);
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.championFormulaire.get('img')?.setValue(new ImageSnippet(event.target.result, file).src);
    });

    reader.readAsDataURL(file);
  }
}
