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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CommandFormInputProcessor } from './CommandFormInputProcessor.js';
export class PopupCommandFormInputProcessor extends CommandFormInputProcessor {
    constructor(gameKeyEventList, playerInputId, gameCanvas, form, popupMenuInputProcessor) {
        super(gameKeyEventList, playerInputId, gameCanvas, form);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    processInput(key) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return super.processInput(key);
        ;
    }
    //@Throws(Exception.constructor)
    processMotionInput(motionGestureEvent) {
        super.processMotionInput(motionGestureEvent);
    }
}
