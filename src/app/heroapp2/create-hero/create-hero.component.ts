import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DisplayMessageType, Hero } from 'src/shared/hero.class';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {

  @Input('heroes') heroes: Hero[];

  @ViewChild('name') name: ElementRef = new ElementRef('');
  @ViewChild('id') id : ElementRef = new ElementRef('');

  @Output('heroAdded') heroAdded: EventEmitter<Hero> = new EventEmitter();

  displayMessage: string;

  messageType: DisplayMessageType = DisplayMessageType.INFO;

  constructor() { }

  ngOnInit(): void {
  }

  addHero() {
    if (this.id.nativeElement.value && this.name.nativeElement.value) {
      const tmpHero = new Hero(this.id.nativeElement.value, this.name.nativeElement.value);
      this.heroes.push(tmpHero);
      this.heroAdded.emit(tmpHero);
      this.id.nativeElement.value = null;
      this.name.nativeElement.value =null;
      this.messageType = DisplayMessageType.SUCCESS;
      this.displayMessage = 'Hero created succesfully';
    }
    else {
      this.messageType = DisplayMessageType.ERROR;
      this.displayMessage = 'Enter a valid Id & Name to add hero';
    }
  }

}
