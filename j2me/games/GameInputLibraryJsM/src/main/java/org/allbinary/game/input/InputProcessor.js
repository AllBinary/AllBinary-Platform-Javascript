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
//not GWT import const Canvas
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameInputStrings } from './GameInputStrings.js';
//not GWT import - same folder const GameInputStrings
export class InputProcessor extends Object {
    constructor() {
        super(...arguments);
        this.gameInputStrings = GameInputStrings.getInstance();
    }
    keyPressedByDevice(keyCode, deviceId) {
    }
    keyReleasedByDevice(canvas, keyCode, deviceId) {
    }
}
