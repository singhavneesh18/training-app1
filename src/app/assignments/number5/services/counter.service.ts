import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CounterService {

    activeToInActiveCount: number = 0;
    inActiveToActiveCount: number = 0;

    incrementActiveCount() : number{ return ++this.inActiveToActiveCount}
    incrementInActiveCount () : number{ return ++this.activeToInActiveCount}

}