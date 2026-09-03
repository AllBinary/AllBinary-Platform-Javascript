/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2011 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
/* Generated Code Do Not Modify */
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Scoreable } from './Scoreable.js';
//not GWT import const Scoreable = globalThis.org.allbinary.game.score.Scoreable;
export class NoScoreable extends Scoreable {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NoScoreable.SINGLETON;
    }
    constructor() {
        super(0);
        //For kotlin this is before the body of the constructor.
    }
    addPoints(points) {
    }
    removePoints(points) {
    }
}
NoScoreable.SINGLETON = new NoScoreable();
