import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayTemplateHandlerService } from '../services/display-templates.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router, private displayTemplateHandlerService: DisplayTemplateHandlerService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.displayTemplateHandlerService.activeGivenIndex(2);
      this.router.navigate(['/heroDashboardComponent']);
    }, 6000);
  }

}
