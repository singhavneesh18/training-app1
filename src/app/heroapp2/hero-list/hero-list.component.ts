import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/shared/hero.class';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  @Input('heroes') heroes: Hero[];

  @Output('heroClicked') heroClickEvent: EventEmitter<Hero>  = new EventEmitter();

  @Output('deleteHero') deleteHeroEvent: EventEmitter<Hero> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  heroClicked(hero: Hero) {
    this.heroClickEvent.emit(hero);
  }

  deleteHero(hero: Hero){
    this.deleteHeroEvent.emit(hero);
  }

}
