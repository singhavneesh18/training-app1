import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoggingService {
    logInfo(message: string, componentName: string) {
        console.info('Info message: ', message, ' from component: ', componentName);
    }
}