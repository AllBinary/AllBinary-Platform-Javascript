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
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ThreadPool } from './ThreadPool.js';
//not GWT import - same folder const ThreadPool = globalThis.org.allbinary.thread.ThreadPool;
//This is mainly for network communications.
export class SecondaryThreadPool extends ThreadPool {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SecondaryThreadPool.instance;
    }
    constructor(poolName, numThreads, priority) {
        super(poolName, numThreads, priority);
        //For kotlin this is before the body of the constructor.
    }
    runTask(task) {
        this.logUtil.putF(new StringMaker().append(StringUtil.getInstance().toString(task)).appendlong(Date.now()).toString(), this, this.threadPoolStrings.ADD_TASK);
        super.runTask(task);
    }
    startTask(task) {
        this.logUtil.putF(new StringMaker().append(this.threadPoolStrings.START_TASK).append(StringUtil.getInstance().toString(task)).appendlong(Date.now()).toString(), this, this.commonStrings.RUN);
    }
    completedTask(task) {
        this.logUtil.putF(new StringMaker().append(this.threadPoolStrings.COMPLETE_TASK).append(StringUtil.getInstance().toString(task)).appendlong(Date.now()).toString(), this, this.commonStrings.RUN);
    }
}
SecondaryThreadPool.instance = new SecondaryThreadPool("Secondary", 1, ThreadPool.NORMAL_PRIORITY);
