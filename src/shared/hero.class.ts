export class Hero {
    constructor(public id: number, public name: string) {}
}

export class Message {
    constructor(public action: ActionTypes, public hero: Hero) {}
}

export enum ActionTypes {
    ADD ='ADD', DELETE= 'DELETE', UPDATE='UPDATE', VIEW = 'VIEW'
}

export const MockHeroes : Hero[] = [
    new Hero(1, 'Avb'),
    new Hero(10, 'Janab'),
    new Hero(119, 'Junior'),
    new Hero(21, 'Jhony'),
    new Hero(31, 'Jack'),
    new Hero(191, 'Juliaan')
];