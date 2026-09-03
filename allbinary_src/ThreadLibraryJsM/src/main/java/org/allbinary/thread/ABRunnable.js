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
/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
//not GWT import const RunnableInterface = globalThis.org.allbinary.thread.RunnableInterface;
export class ABRunnable extends Object {
    constructor() {
        super(...arguments);
        this.running = false;
    }
    setThread(thread) {
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    isRunning() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.running;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    setRunning(running) {
        this.running = running;
    }
    run() {
    }
    getType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
}
