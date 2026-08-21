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
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ThreadUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.JOIN = "join";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ThreadUtil.instance;
    }
    isRunning(thread) {
        if (thread !=
            null
            && thread.isAlive()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    //@Throws(Exception.constructor)
    join(thread) {
        if (ThreadUtil.getInstance().isRunning(thread)) {
            this.logUtil.putF("Waiting for Thread To Join/End", this, this.JOIN);
            thread.join();
        }
    }
}
ThreadUtil.instance = new ThreadUtil();
