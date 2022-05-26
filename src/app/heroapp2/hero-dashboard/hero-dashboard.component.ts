import { Component, OnInit } from '@angular/core';
import { ActionTypes, Hero, Message, MockHeroes } from 'src/shared/hero.class';

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: './hero-dashboard.component.html',
  styleUrls: ['./hero-dashboard.component.css']
})
export class HeroDashboardComponent implements OnInit {

  heroes: Hero[] = MockHeroes;

  selectedHero: Hero ;

  messagesLog: Message[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  heroClicked(hero: Hero) {
    this.messagesLog.push(new Message(ActionTypes.VIEW, new Hero(hero.id, hero.name)));
    this.selectedHero = hero;
  }

  heroUpdated(hero: Hero) {
    this.messagesLog.push(new Message(ActionTypes.UPDATE, hero));
  }

  cleanMessageHistory() {
    this.messagesLog = [];
  }

}
