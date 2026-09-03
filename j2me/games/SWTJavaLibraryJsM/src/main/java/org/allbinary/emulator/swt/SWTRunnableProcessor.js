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
//not GWT import const Display = globalThis.org.eclipse.swt.widgets.Display;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SWTProcessor } from './SWTProcessor.js';
//not GWT import const SWTProcessor = globalThis.org.allbinary.emulator.swt.SWTProcessor;
export class SWTRunnableProcessor extends SWTProcessor {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SWTRunnableProcessor.instanceR;
    }
    constructor() {
        super();
    }
    process(display) {
        this.runnable.run();
    }
}
SWTRunnableProcessor.instanceR = new SWTRunnableProcessor();
