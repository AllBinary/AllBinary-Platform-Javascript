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
import { Object } from '../../../java/lang/Object.js';
import { Long } from '../../../java/lang/Long.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameTickTimeDelayHelper extends Object {
    constructor(startTime) {
        super();
        this.timeDelta = 0;
        this.startTime = startTime;
        this.lastStartTime = 0;
    }
    setStartTime() {
        this.startTime = Date.now();
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.startTime;
    }
    loop() {
        if (this.lastStartTime == Long.MIN_VALUE) {
            this.timeDelta = 0;
        }
        else {
            this.timeDelta = Date.now() - this.lastStartTime;
        }
    }
    getTimeFromStart() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.startTime - this.lastStartTime;
    }
}
