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
import { System } from '../../../java/lang/System.js';
//not plain js import { MIDlet } from '../../../javax/microedition/midlet/MIDlet.js';
const MIDlet = globalThis.javax.microedition.midlet.MIDlet;
import { Processor } from '../../../org/allbinary/canvas/Processor.js';
//not GWT import const Processor = globalThis.org.allbinary.canvas.Processor;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class MidletExitProcessor extends Processor {
    constructor(midlet) {
        super();
        this.midlet = midlet;
    }
    //@Throws(Exception.constructor)
    process() {
        System.exit(0);
    }
}
