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
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ThreadObjectUtil } from './ThreadObjectUtil.js';
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
