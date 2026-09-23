/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
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
import { GameRunnable } from './GameRunnable.js';
//not GWT import - same folder const GameRunnable
export class NullWaitGameRunnable extends GameRunnable {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullWaitGameRunnable.instance;
    }
}
NullWaitGameRunnable.instance = new NullWaitGameRunnable();
//JSNI Expose so JSNI can access this class *** 
globalThis.org = globalThis.org || {};
globalThis.org.allbinary = globalThis.org.allbinary || {};
globalThis.org.allbinary.game = globalThis.org.allbinary.game || {};
globalThis.org.allbinary.game.displayable = globalThis.org.allbinary.game.displayable || {};
globalThis.org.allbinary.game.displayable.canvas = globalThis.org.allbinary.game.displayable.canvas || {};
globalThis.org.allbinary.game.displayable.canvas.NullWaitGameRunnable = NullWaitGameRunnable;
console.log('Exported NullWaitGameRunnable as globalThis');
