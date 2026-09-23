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
import { Object } from '../../../../../java/lang/Object.js';
import { Thread } from '../../../../../java/lang/Thread.js';
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameRunnable extends Object {
    constructor() {
        super();
        this.WAIT = 240;
        this.FAST = 60;
        this.waitInMillis = this.WAIT;
    }
    run() {
        DisplayInfoSingleton.getInstance().process();
    }
    //@Throws(Exception.constructor)
    processLoopSleep() {
        Thread.sleep(this.waitInMillis);
    }
}
