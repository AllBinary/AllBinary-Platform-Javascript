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
import { Object } from '../../../../java/lang/Object.js';
//not plain js import { NullRunnable } from '../../../../org/allbinary/thread/NullRunnable.js';
const NullRunnable = globalThis.org.allbinary.thread.NullRunnable;
//not GWT import const Display = globalThis.org.eclipse.swt.widgets.Display;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SWTProcessor extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SWTProcessor.instance;
    }
    constructor() {
        super();
        this.runnable = NullRunnable.getInstance();
    }
    process(display) {
        display.sleep();
    }
}
SWTProcessor.instance = new SWTProcessor();
