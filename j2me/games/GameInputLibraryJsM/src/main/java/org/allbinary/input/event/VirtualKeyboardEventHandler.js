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
import { Thread } from '../../../../java/lang/Thread.js';
import { BooleanFactory } from '../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const EventListenerInterface
import { BasicEventHandler } from '../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
//not GWT import const BasicEventHandler
//Current folder imports from return types, extended types, and scope (deduplicated)
import { VirtualKeyboardEvent } from './VirtualKeyboardEvent.js';
//not GWT import - same folder const VirtualKeyboardEventListenerInterface
export class VirtualKeyboardEventHandler extends BasicEventHandler {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return VirtualKeyboardEventHandler.gameKeyEventHandler;
    }
    constructor() {
        super();
        this.SHOW_EVENT = new VirtualKeyboardEvent(BooleanFactory.getInstance().TRUE);
        this.HIDE_EVENT = new VirtualKeyboardEvent(BooleanFactory.getInstance().FALSE);
    }
    //@Throws(Exception.constructor)
    process(eventObject, eventListenerInterface) {
        var virtualKeyboardEventListenerInterface = eventListenerInterface;
        ;
        virtualKeyboardEventListenerInterface.onVirtualKeyboardEvent(eventObject);
    }
    open() {
        try {
            Thread.sleep(120);
            this.fireEvent(this.SHOW_EVENT);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "open", e);
        }
    }
    close() {
        try {
            Thread.sleep(120);
            this.fireEvent(this.HIDE_EVENT);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.CLOSE, e);
        }
    }
}
VirtualKeyboardEventHandler.gameKeyEventHandler = new VirtualKeyboardEventHandler();
