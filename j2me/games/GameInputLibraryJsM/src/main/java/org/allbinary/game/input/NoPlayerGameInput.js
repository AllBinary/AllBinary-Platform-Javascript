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
//not GWT import const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PlayerGameInput } from './PlayerGameInput.js';
//not GWT import - same folder const PlayerGameInput = globalThis.org.allbinary.game.input.PlayerGameInput;
export class NoPlayerGameInput extends PlayerGameInput {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NoPlayerGameInput.SINGLETON;
    }
    constructor() {
        super(new BasicArrayListD(), new BasicArrayListD(), -1);
        //For kotlin this is before the body of the constructor.
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    onDownGameKeyEvent(gameKeyEvent) {
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    onUpGameKeyEvent(gameKeyEvent) {
    }
}
NoPlayerGameInput.SINGLETON = new NoPlayerGameInput();
