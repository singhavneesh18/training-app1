import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Hero } from 'src/shared/hero.model';
import { HEROES } from 'src/shared/mock.heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero = <Hero> {};


  heroes: Hero[] = HEROES;

  @ViewChild('name') name: ElementRef = new ElementRef('');

  @ViewChild('id') id: any;


  constructor() { }

  ngOnInit(): void {
  }

  heroSelected(selectedHero: Hero) {
    this.selectedHero = selectedHero;
  }

  deleteHero(selectedHero: Hero) {
    const index = this.heroes.indexOf(selectedHero);
    this.heroes.splice(index, 1);
    if (selectedHero === this.selectedHero) {
      this.selectedHero = <Hero>{};
    }
  }

  addNewHero() {
    const localId = this.id.nativeElement.value;
    const localName = this.name.nativeElement.value;
    if (localId && localName) {
    this.heroes.push({ id: localId, name: localName });
    this.id.nativeElement.value = '';
    this.name.nativeElement.value = '';
    } else {
      alert('Enter Id & Name to add your favorite hero to list');
    }
  }

}
