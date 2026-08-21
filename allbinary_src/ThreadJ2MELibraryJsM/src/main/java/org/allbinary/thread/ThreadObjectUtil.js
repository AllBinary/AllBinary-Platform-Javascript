/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
import { Thread } from '../../../java/lang/Thread.js';
import { TsUtil } from '../../../org/allbinary/TsUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NullPriorityRunnable } from './NullPriorityRunnable.js';
export class ThreadObjectUtil extends Object {
    constructor() {
        super(...arguments);
        this.NULL_PRIORITY_RUNNABLE = new NullPriorityRunnable();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ThreadObjectUtil.instance;
    }
    notifyObject(anyType) {
        anyType.notify();
    }
    //@Throws(Exception.constructor)
    waitObject(anyType) {
        anyType.wait();
    }
    //@Throws(Exception.constructor)
    waitObjectFor(anyType, delay) {
        TsUtil.getInstance().waitFor(anyType, delay);
    }
    processThread(runnable) {
        var thread = new Thread(runnable);
        ;
        thread.start();
    }
}
ThreadObjectUtil.instance = new ThreadObjectUtil();
