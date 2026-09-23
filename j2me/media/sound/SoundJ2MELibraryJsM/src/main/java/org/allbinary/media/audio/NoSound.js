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
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Sound } from './Sound.js';
//not GWT import - same folder const Sound
import { NoPlayer } from './NoPlayer.js';
//not GWT import - same folder const NoPlayer
export class NoSound extends Sound {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NoSound.instance;
    }
    constructor() {
        super(StringUtil.getInstance().EMPTY_STRING);
        //For kotlin this is before the body of the constructor.
        this.setPlayerP(NoPlayer.NO_PLAYER);
    }
}
NoSound.instance = new NoSound();
