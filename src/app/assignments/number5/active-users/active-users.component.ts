import { Component, Input } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  @Input() users: string[];

  constructor(private userService: UserService, private loggingService: LoggingService) { }

  onSetToInactive(id: number) {
    this.loggingService.logInfo('Moving user: ' + this.users[id] + ' from active to inactive', 'ActiveUsersComponent');
    this.userService.onSetToInactive(id);
  }
}
