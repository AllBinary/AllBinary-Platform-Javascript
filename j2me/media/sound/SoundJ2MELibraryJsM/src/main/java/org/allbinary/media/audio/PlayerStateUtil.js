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
import { Object } from '../../../../java/lang/Object.js';
//not plain js import { Player, PlayerI } from '../../../../javax/microedition/media/Player.js';
const Player = globalThis.javax.microedition.media.Player;
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PlayerStateUtil extends Object {
    constructor() {
        super(...arguments);
        this.commonStrings = CommonStrings.getInstance();
        this.UNREALIZED = "UNREALIZED";
        this.REALIZED = "REALIZED";
        this.PREFETCHED = "PREFETCHED";
        this.STARTED = "STARTED";
        this.CLOSED = "CLOSED";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PlayerStateUtil.instance;
    }
    convert(state) {
        if (state == PlayerI.UNREALIZED) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.UNREALIZED;
        }
        else if (state == PlayerI.REALIZED) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.REALIZED;
        }
        else if (state == PlayerI.PREFETCHED) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.PREFETCHED;
        }
        else if (state == PlayerI.STARTED) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.STARTED;
        }
        else if (state == PlayerI.CLOSED) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.CLOSED;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.commonStrings.UNKNOWN;
    }
}
PlayerStateUtil.instance = new PlayerStateUtil();
