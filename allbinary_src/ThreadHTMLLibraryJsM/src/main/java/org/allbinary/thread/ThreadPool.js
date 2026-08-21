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
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
import { BasicArrayListD } from '../../../org/allbinary/util/BasicArrayListD.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NullRunnable } from './NullRunnable.js';
import { ThreadPoolStrings } from './ThreadPoolStrings.js';
import { ThreadObjectUtil } from './ThreadObjectUtil.js';
export class ThreadPool extends Object {
    constructor(poolName, numThreads, priority) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.NULL_RUNNABLE = NullRunnable.getInstance();
        this.threadPoolStrings = ThreadPoolStrings.getInstance();
        this.threadObjectUtil = ThreadObjectUtil.getInstance();
        this.isAlive = false;
        this.taskQueue = new BasicArrayListD();
        this.numThreads = 0;
        this.runningTask = false;
        this.currentPriorityRunnable = this.threadObjectUtil.NULL_PRIORITY_RUNNABLE;
    }
    //@Throws(Exception.constructor)
    runAPriorityTask() {
        if (!this.currentPriorityRunnable.isDone()) {
            this.currentPriorityRunnable.run();
        }
        else {
            var runnable = this.getTask();
            ;
            if (runnable == this.NULL_RUNNABLE) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            this.currentPriorityRunnable = runnable;
            if (!(this.currentPriorityRunnable == this.threadObjectUtil.NULL_PRIORITY_RUNNABLE)) {
                this.currentPriorityRunnable.reset();
                this.currentPriorityRunnable.run();
            }
        }
    }
    //@Throws(Exception.constructor)
    runATask() {
        var runnable = this.getTask();
        ;
        if (runnable !=
            null) {
            runnable.run();
        }
    }
    init() {
        if (!this.isAlive) {
            this.isAlive = true;
            this.taskQueue = new BasicArrayListD();
        }
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    runTaskWithPriority(task) {
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
        }
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    runTask(task) {
        if (!this.isAlive) {
            this.init();
        }
        if (task !=
            null) {
            this.taskQueue.add(task);
        }
    }
    //@Throws(InterruptedException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    getTask() {
        if (this.taskQueue.isEmpty()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.NULL_RUNNABLE;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.taskQueue.removeAt(0);
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    clear() {
        this.taskQueue.clear();
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    close() {
        if (this.isAlive) {
            this.isAlive = false;
            this.taskQueue.clear();
            this.currentPriorityRunnable = this.threadObjectUtil.NULL_PRIORITY_RUNNABLE;
        }
    }
    join() {
        this.isAlive = false;
        this.taskQueue.clear();
        this.currentPriorityRunnable = this.threadObjectUtil.NULL_PRIORITY_RUNNABLE;
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
            this.currentPriorityRunnable = this.threadObjectUtil.NULL_PRIORITY_RUNNABLE;
        }
    }
    startTask(task) {
    }
    completedTask(task) {
    }
}
ThreadPool.NORMAL_PRIORITY = 5;
