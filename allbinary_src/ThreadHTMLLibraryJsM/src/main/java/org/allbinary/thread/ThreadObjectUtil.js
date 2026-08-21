/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
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
    }
    //@Throws(Exception.constructor)
    waitObject(anyType) {
    }
    //@Throws(Exception.constructor)
    waitObjectFor(anyType, delay) {
    }
    processThread(runnable) {
        runnable.run();
    }
}
ThreadObjectUtil.instance = new ThreadObjectUtil();
