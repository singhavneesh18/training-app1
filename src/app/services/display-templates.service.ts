import { DisplayTemplatesInfo } from "src/shared/common.model";

export class DisplayTemplateHandlerService {
    displayTemplates: DisplayTemplatesInfo[] = [
        new DisplayTemplatesInfo(1, 'App Product', true, '/productComponent'),
        new DisplayTemplatesInfo(2, 'Show app heroes', false, '/heroesComponent'),
        new DisplayTemplatesInfo(3, 'Show heroes dashboard', false, '/heroDashboardComponent'),
        new DisplayTemplatesInfo(4, 'Form Parctise', false, '/formPractiseComponent'),
        new DisplayTemplatesInfo(5, 'Show users example', false, '/showUsersComponent')
      ];

    activeGivenIndex(index: number) {
        this.displayTemplates.forEach(a=> a.isActive =false)
        this.displayTemplates[index].isActive = true;
    }
}