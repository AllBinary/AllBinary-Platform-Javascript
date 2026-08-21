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
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicPlayer } from './BasicPlayer.js';
import { NullControl } from './NullControl.js';
export class NoPlayer extends BasicPlayer {
    constructor() {
        super();
    }
    close() {
    }
    getContentType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().NULL_STRING;
    }
    getControl(controlType) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new NullControl();
    }
    getControls() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return [];
    }
}
NoPlayer.NO_PLAYER = new NoPlayer();
