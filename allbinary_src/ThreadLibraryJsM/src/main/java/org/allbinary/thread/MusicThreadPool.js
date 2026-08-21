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
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ThreadPool } from './ThreadPool.js';
export class MusicThreadPool extends ThreadPool {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MusicThreadPool.THREAD_POOL;
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
MusicThreadPool.THREAD_POOL = new ThreadPool("Music", 2, ThreadPool.NORMAL_PRIORITY);
