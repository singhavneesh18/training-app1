import { Component, OnInit } from '@angular/core';
import { DisplayTemplatesInfo } from 'src/shared/common.model';
import { DisplayTemplateHandlerService } from './services/display-templates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DisplayTemplateHandlerService]
})
export class AppComponent implements OnInit{
  displayTemplates: DisplayTemplatesInfo[] ;

  constructor(private displayTemplateHandlerService: DisplayTemplateHandlerService) {}
  
  ngOnInit(): void {
    this.displayTemplates = this.displayTemplateHandlerService.displayTemplates;
  }

  show(id: number): string {
    this.displayTemplates.forEach(a=> a.isActive=false);
    this.displayTemplates[id].isActive= true;
    return this.displayTemplates[id].templateNameToDisplay;
  }

  isActive(id: number): string {
    return this.displayTemplates[id].isActive ? 'active' : '';
  }

  getClassForActiveNavbar(id: number): string {
    return this.displayTemplates[id].isActive ? 'active' : '';
  }


}
