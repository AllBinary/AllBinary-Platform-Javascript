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
import { Object } from '../../../java/lang/Object.js';
import { Long } from '../../../java/lang/Long.js';
import { Debug } from '../../../android/os/Debug.js';
//not GWT import - same folder const DebugInterface
export class AndroidDebug extends Object {
    constructor() {
        super(...arguments);
        this.startTime = Long.MAX_VALUE;
        this.running = false;
        this.bufferSize = 32 * 1024 * 1024;
    }
    start() {
        this.setStartTime(Date.now());
        Debug.startMethodTracing("trace", this.bufferSize);
        this.setRunning(true);
    }
    stop() {
        this.startTime = Long.MAX_VALUE;
        Debug.stopMethodTracing();
        this.setRunning(false);
    }
    getMaxTime() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 120000;
    }
    setStartTime(startTime) {
        this.startTime = startTime;
    }
    getStartTime() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.startTime;
    }
    setRunning(running) {
        this.running = running;
    }
    isRunning() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.running;
    }
}
