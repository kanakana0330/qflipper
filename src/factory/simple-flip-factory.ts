/// <reference path="flip/simple-flip.ts" />

module Q {
    
    export class SimpleFlipFactory {

        constructor(elm: ZeptoCollection) {
            return new SimpleFlip(elm);
        }

    }

}