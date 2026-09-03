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
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js import { ARunnable } from './ARunnable.js';
const ARunnable = globalThis.org.allbinary.thread.ARunnable;
export class NullRunnable extends ARunnable {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullRunnable.instance;
    }
    constructor() {
        super();
    }
}
NullRunnable.instance = new NullRunnable();
