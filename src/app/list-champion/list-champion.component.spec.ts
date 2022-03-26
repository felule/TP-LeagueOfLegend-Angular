import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChampionComponent } from './list-champion.component';

describe('ListChampionComponent', () => {
  let component: ListChampionComponent;
  let fixture: ComponentFixture<ListChampionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChampionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChampionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
