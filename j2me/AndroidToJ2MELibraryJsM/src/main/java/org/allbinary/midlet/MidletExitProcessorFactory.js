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
//not GWT import const MIDlet
import { AppletUtil } from '../../../org/allbinary/AppletUtil.js';
//not GWT import const AppletUtil
import { J2MEUtil } from '../../../org/allbinary/J2MEUtil.js';
//not GWT import const J2MEUtil
import { Processor } from '../../../org/allbinary/canvas/Processor.js';
//not GWT import const Processor
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MidletExitProcessor } from './MidletExitProcessor.js';
//not GWT import - same folder const MidletExitProcessor
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
