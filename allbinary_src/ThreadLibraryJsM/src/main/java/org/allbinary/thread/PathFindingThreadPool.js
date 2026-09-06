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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ThreadPool } from './ThreadPool.js';
//not GWT import - same folder const PriorityRunnable = globalThis.org.allbinary.thread.PriorityRunnable;
//This is mainly for network communications.
export class PathFindingThreadPool extends ThreadPool {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PathFindingThreadPool.instance;
    }
    constructor(poolName, numThreads, priority) {
        super(poolName, numThreads, ThreadPool.NORMAL_PRIORITY);
        //For kotlin this is before the body of the constructor.
    }
    runTaskWithPriority(task) {
        super.runTaskWithPriority(task);
    }
    runTask(task) {
        super.runTask(task);
    }
    startTask(task) {
    }
    completedTask(task) {
    }
}
PathFindingThreadPool.instance = new PathFindingThreadPool("PathFinding", 1, 1);
