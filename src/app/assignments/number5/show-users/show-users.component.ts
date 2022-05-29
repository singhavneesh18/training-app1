import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { LoggingService } from '../services/logging.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css'],
  providers: [UserService, CounterService, LoggingService]
})
export class ShowUsersComponent implements OnInit {
  activeUsers: string[];
  inactiveUsers: string[];
  activeToInActiveCount: number;
  inActiveToActiveCount: number;

  constructor(private userService: UserService, private counterService: CounterService, private loggingService: LoggingService) {
    this.userService.activeUsersUpdated.subscribe((updated: boolean) => {
      this.activeToInActiveCount = this.counterService.incrementActiveCount();
    });
    this.userService.inActiveUsersUpdated.subscribe((updated: boolean) => {
      this.inActiveToActiveCount = this.counterService.incrementInActiveCount();
    });
  }

  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
    this.activeToInActiveCount = this.counterService.activeToInActiveCount;
    this.inActiveToActiveCount = this.counterService.inActiveToActiveCount;
  }



}
