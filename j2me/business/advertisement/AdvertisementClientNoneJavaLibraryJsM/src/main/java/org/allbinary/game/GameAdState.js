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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
import { GameAdStateBase } from '../../../org/allbinary/business/advertisement/GameAdStateBase.js';
//not GWT import const VirtualKeyboardEvent = globalThis.org.allbinary.input.event.VirtualKeyboardEvent;
import { VirtualKeyboardEventHandler } from '../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameAdState extends GameAdStateBase {
    constructor(adConfiguration) {
        super(adConfiguration);
        //For kotlin this is before the body of the constructor.
        VirtualKeyboardEventHandler.getInstance().addListenerInterface(this);
    }
    //@Throws(Exception.constructor)
    onVirtualKeyboardEvent(virtualKeyboardEvent) {
    }
}
