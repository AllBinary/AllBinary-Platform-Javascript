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
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ThreadPool } from './ThreadPool.js';
//not GWT import - same folder const ThreadPool
//This is mainly for network communications.
export class ImageThreadPool extends ThreadPool {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageThreadPool.instance;
    }
    constructor(poolName, numThreads, priority) {
        super(poolName, numThreads, priority);
        this.logUtil = LogUtil.getInstance();
        //For kotlin this is before the body of the constructor.
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    runTask(task) {
        super.runTask(task);
    }
    startTask(task) {
    }
    completedTask(task) {
    }
}
ImageThreadPool.instance = new ImageThreadPool("ImageLoader", 1, ThreadPool.NORMAL_PRIORITY);
