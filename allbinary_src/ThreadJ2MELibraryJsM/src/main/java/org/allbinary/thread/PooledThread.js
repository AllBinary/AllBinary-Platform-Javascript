/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
import { Thread } from '../../../java/lang/Thread.js';
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ThreadObjectUtil } from './ThreadObjectUtil.js';
//not GWT import - same folder const ThreadPool = globalThis.org.allbinary.thread.ThreadPool;
export class PooledThread extends Thread {
    constructor(threadPool) {
        super(threadPool.createName());
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.threadObjectUtil = ThreadObjectUtil.getInstance();
        this.INTERRUPT_EXCEPTION = "Exit InterruptedException";
        //For kotlin this is before the body of the constructor.
        this.logUtil.putF(this.commonStrings.CONSTRUCTOR, this, this.commonStrings.CONSTRUCTOR);
        this.threadPool = threadPool;
    }
    run() {
        this.threadPool.threadStarted();
        while (true) {
            var task2 = this.threadObjectUtil.NULL_PRIORITY_RUNNABLE;
            ;
            try {
                task2 = this.threadPool.getTask();
                this.threadPool.runningTask = true;
                this.threadPool.startTask(task2);
                //: 
            }
            catch (ex) {
                var logUtil = LogUtil.getInstance();
                ;
                logUtil.putF(this.INTERRUPT_EXCEPTION, this, this.commonStrings.RUN);
                break;
            }
            if (task2 == this.threadObjectUtil.NULL_PRIORITY_RUNNABLE) {
                break;
            }
            try {
                task2.run();
                this.threadPool.completedTask(task2);
                this.threadPool.runningTask = false;
                //: 
            }
            catch (e) {
                var logUtil = LogUtil.getInstance();
                ;
                logUtil.put(new StringMaker().append(this.commonStrings.EXCEPTION_LABEL).append(StringUtil.getInstance().toString(task2)).toString(), this, this.commonStrings.RUN, e);
            }
        }
        this.threadPool.threadStopped();
    }
}
