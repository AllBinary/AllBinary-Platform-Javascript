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
import { BasicEventHandler } from '../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
//not GWT import const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ColorChangeEventHandler extends BasicEventHandler {
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ColorChangeEventHandler.eventHandler;
    }
    constructor() {
        super();
    }
}
ColorChangeEventHandler.eventHandler = new ColorChangeEventHandler();
