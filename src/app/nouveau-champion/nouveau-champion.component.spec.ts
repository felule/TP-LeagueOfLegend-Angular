import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauChampionComponent } from './nouveau-champion.component';

describe('NouveauChampionComponent', () => {
  let component: NouveauChampionComponent;
  let fixture: ComponentFixture<NouveauChampionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauChampionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauChampionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
