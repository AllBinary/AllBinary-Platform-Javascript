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
import { AppletUtil } from '../../../org/allbinary/AppletUtil.js';
import { J2MEUtil } from '../../../org/allbinary/J2MEUtil.js';
import { Processor } from '../../../org/allbinary/canvas/Processor.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MidletExitProcessor } from './MidletExitProcessor.js';
export class MidletExitProcessorFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MidletExitProcessorFactory.instance;
    }
    getExitInstance(midlet) {
        if (AppletUtil.isAppletLoader(midlet) || J2MEUtil.isJ2ME()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return Processor.getInstance();
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new MidletExitProcessor(midlet);
        }
    }
}
MidletExitProcessorFactory.instance = new MidletExitProcessorFactory();
