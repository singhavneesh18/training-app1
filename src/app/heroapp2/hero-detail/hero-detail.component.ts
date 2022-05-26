import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/shared/hero.class';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  private _selectedHero: Hero;

  @Input('hero') set selectedHero(value: Hero) {
    this._selectedHero = value;
    this.displayHero = new Hero(value.id, value.name);
  }

  get selectedHero(): Hero{
    return this._selectedHero;
  }

  displayHero: Hero;

  @Output('heroUpdated') heroUpdated: EventEmitter<Hero> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateSelectedHero(hero: Hero) {
    this._selectedHero.name = hero.name;
    this.heroUpdated.emit(hero);
  }

}
