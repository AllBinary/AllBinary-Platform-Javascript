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
import { RuntimeException } from '../../../java/lang/RuntimeException.js';
import { Thread } from '../../../java/lang/Thread.js';
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } from '../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { BasicArrayListUtil } from '../../../org/allbinary/util/BasicArrayListUtil.js';
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js import { NullRunnable } from './NullRunnable.js';
const NullRunnable = globalThis.org.allbinary.thread.NullRunnable;
import { ThreadPoolStrings } from './ThreadPoolStrings.js';
//not GWT import const ThreadPoolStrings = globalThis.org.allbinary.thread.ThreadPoolStrings;
import { ThreadObjectUtil } from './ThreadObjectUtil.js';
//not GWT import const ThreadObjectUtil = globalThis.org.allbinary.thread.ThreadObjectUtil;
import { PooledThread } from './PooledThread.js';
//not GWT import const PriorityRunnable = globalThis.org.allbinary.thread.PriorityRunnable;
export class ThreadPool extends Object {
    constructor(poolName, numThreads, priority) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.NULL_RUNNABLE = NullRunnable.getInstance();
        this.threadPoolStrings = ThreadPoolStrings.getInstance();
        this.threadObjectUtil = ThreadObjectUtil.getInstance();
        this.isAlive = false;
        this.taskQueue = BasicArrayListUtil.getInstance().getImmutableInstance();
        this.threadID = 0;
        this.runningTask = false;
        this.poolName = poolName;
        this.priority = priority;
        this.numThreads = numThreads;
    }
    init() {
        if (!this.isAlive) {
            this.isAlive = true;
            this.taskQueue = new BasicArrayListD();
            var pooledThread;
            ;
            for (var i = 0; i < this.numThreads; i++) {
                pooledThread = new PooledThread(this);
                pooledThread.setPriority(this.priority);
                pooledThread.start();
            }
        }
    }
    //@Throws(Exception.constructor)
    runAPriorityTask() {
        throw new RuntimeException();
    }
    runTaskWithPriority(task) {
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this) 
        //mutex.withLock
        if (!this.isAlive) {
            this.init();
        }
        if (task !=
            null) {
            var size = this.taskQueue.size();
            ;
            var runnable;
            ;
            var lowerPriorityRunnable = this.threadObjectUtil.NULL_PRIORITY_RUNNABLE;
            ;
            for (var index = 0; index < size; index++) {
                runnable = this.taskQueue.get(index);
                if (runnable.getPriority() > task.getPriority()) {
                    lowerPriorityRunnable = runnable;
                    break;
                }
            }
            if (lowerPriorityRunnable == this.threadObjectUtil.NULL_PRIORITY_RUNNABLE) {
                this.taskQueue.add(task);
            }
            else {
                var index = this.taskQueue.indexOf(lowerPriorityRunnable);
                ;
                this.taskQueue.addAt(index, task);
            }
            this.notify();
        }
    }
    runTask(task) {
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this) 
        //mutex.withLock
        if (!this.isAlive) {
            this.init();
        }
        if (task !=
            null) {
            this.taskQueue.add(task);
            this.notify();
        }
    }
    //@Throws(InterruptedException.constructor)
    getTask() {
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this) 
        //mutex.withLock
        while (this.taskQueue.size() == 0) {
            if (!this.isAlive) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.NULL_RUNNABLE;
            }
            this.wait();
        }
        var runnable = this.taskQueue.removeAt(0);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return runnable;
    }
    clear() {
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this) 
        //mutex.withLock
        if (this.isAlive) {
            this.taskQueue.clear();
        }
    }
    close() {
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this) 
        //mutex.withLock
        if (this.isAlive) {
            this.isAlive = false;
            this.taskQueue.clear();
        }
    }
    join() {
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this) 
        //mutex.withLock
        this.isAlive = false;
        this.taskQueue.clear();
        this.notifyAll();
    }
    isBusy() {
        if (!this.isAlive) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        if (this.taskQueue.size() > 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        if (this.runningTask) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    threadStarted() {
    }
    threadStopped() {
        if (this.numThreads == 1) {
            this.isAlive = false;
            this.taskQueue.clear();
        }
    }
    startTask(task) {
    }
    completedTask(task) {
    }
    createName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StringMaker().append(this.poolName).append(ThreadPool.ROOT_NAME).appendint(this.threadID++).toString();
        ;
    }
}
ThreadPool.ROOT_NAME = "-PooledThread-";
ThreadPool.NORMAL_PRIORITY = Thread.NORM_PRIORITY;
