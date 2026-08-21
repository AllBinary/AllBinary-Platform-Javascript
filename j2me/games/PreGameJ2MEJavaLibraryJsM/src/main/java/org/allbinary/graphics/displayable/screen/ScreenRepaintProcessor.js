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
import { Processor } from '../../../../../org/allbinary/canvas/Processor.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ScreenRepaintUtil } from './ScreenRepaintUtil.js';
export class ScreenRepaintProcessor extends Processor {
    constructor(displayable) {
        super();
        this.displayable = displayable;
    }
    //@Throws(Exception.constructor)
    process() {
        ScreenRepaintUtil.repaint(this.displayable);
    }
}
