import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from 'src/shared/hero.class';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input('messages') messagesLog: Message[] ;

  @Output('cleanMessageLog') clearMessage: EventEmitter<Message> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cleanMessage() {
    this.clearMessage.emit();
  }

}
