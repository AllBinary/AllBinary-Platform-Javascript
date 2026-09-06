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
import { Object } from '../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DemoGameMidletState } from './DemoGameMidletState.js';
//not GWT import - same folder const DemoGameMidletState = globalThis.org.allbinary.game.midlet.DemoGameMidletState;
export class DemoGameMidletStateFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DemoGameMidletStateFactory.STATE;
    }
    constructor() {
        super();
        this.NONE = new DemoGameMidletState();
        this.START_DEMO = new DemoGameMidletState();
        this.START_GAME = new DemoGameMidletState();
        this.START_INPUT_MAPPING = new DemoGameMidletState();
    }
}
DemoGameMidletStateFactory.STATE = new DemoGameMidletStateFactory();
