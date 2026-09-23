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
import { Integer } from '../../../../../java/lang/Integer.js';
//not GWT import const Activity
import { VirtualKeyboard } from '../../../../../org/allbinary/android/input/VirtualKeyboard.js';
//not GWT import const VirtualKeyboardEvent
import { VirtualKeyboardEventHandler } from '../../../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js';
//not GWT import const VirtualKeyboardEventListenerInterface
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not GWT import const AllBinaryEventObject
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ShowVirtualKeyboardRunnable } from './ShowVirtualKeyboardRunnable.js';
//not GWT import - same folder const ShowVirtualKeyboardRunnable
import { HideVirtualKeyboardRunnable } from './HideVirtualKeyboardRunnable.js';
//not GWT import - same folder const HideVirtualKeyboardRunnable
export class VirtualKeyboardAPI3 extends VirtualKeyboard {
    constructor(activity) {
        super();
        this.virtualKeyboard = false;
        //For kotlin this is before the body of the constructor.
        this.activity = activity;
        this.showVirtualKeyboardRunnable = new ShowVirtualKeyboardRunnable(this.activity);
        this.hideVirtualKeyboardRunnable = new HideVirtualKeyboardRunnable(this.activity);
        var virtualKeyboardEventHandler = VirtualKeyboardEventHandler.getInstance();
        ;
        virtualKeyboardEventHandler.removeAllListeners();
        virtualKeyboardEventHandler.addListenerInterface(this);
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    onVirtualKeyboardEvent(virtualKeyboardEvent) {
        var isShow = virtualKeyboardEvent.getSource();
        ;
        if (isShow.valueOf()) {
            this.showVirtualKeyboard();
        }
        else {
            this.hideVirtualKeyboard();
        }
    }
    forceHide() {
        this.hideVirtualKeyboard();
    }
    hide() {
        if (this.virtualKeyboard) {
            this.forceHide();
        }
    }
    showVirtualKeyboard() {
        this.activity.runOnUiThread(this.showVirtualKeyboardRunnable);
        this.virtualKeyboard = true;
    }
    hideVirtualKeyboard() {
        this.activity.runOnUiThread(this.hideVirtualKeyboardRunnable);
        this.virtualKeyboard = false;
    }
}
VirtualKeyboardAPI3.MAX_API = Integer.MAX_VALUE;
VirtualKeyboardAPI3.MIN_API = 3;
