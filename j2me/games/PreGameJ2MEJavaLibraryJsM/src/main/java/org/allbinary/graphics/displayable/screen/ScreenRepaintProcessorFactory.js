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
import { Object } from '../../../../../java/lang/Object.js';
//not plain js import { Displayable } from '../../../../../javax/microedition/lcdui/Displayable.js';
const Displayable = globalThis.javax.microedition.lcdui.Displayable;
import { J2MEUtil } from '../../../../../org/allbinary/J2MEUtil.js';
//not GWT import const J2MEUtil = globalThis.org.allbinary.J2MEUtil;
import { Processor } from '../../../../../org/allbinary/canvas/Processor.js';
//not GWT import const Processor = globalThis.org.allbinary.canvas.Processor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ScreenRepaintProcessor } from './ScreenRepaintProcessor.js';
//not GWT import const ScreenRepaintProcessor = globalThis.org.allbinary.graphics.displayable.screen.ScreenRepaintProcessor;
export class ScreenRepaintProcessorFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ScreenRepaintProcessorFactory.instance;
    }
    constructor() {
        super();
    }
    create(displayable) {
        if (!J2MEUtil.isJ2ME()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new ScreenRepaintProcessor(displayable);
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return Processor.getInstance();
            ;
        }
    }
}
ScreenRepaintProcessorFactory.instance = new ScreenRepaintProcessorFactory();
