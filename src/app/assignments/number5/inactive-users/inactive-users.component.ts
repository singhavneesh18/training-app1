import { Component, Input } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];


  constructor(private userService: UserService, private loggingService: LoggingService) { }

  onSetToActive(id: number) {
    this.loggingService.logInfo('Moving user: ' + this.users[id] + ' from inactive to active', 'InactiveUsersComponent');
    this.userService.onSetToActive(id);

  }
}
