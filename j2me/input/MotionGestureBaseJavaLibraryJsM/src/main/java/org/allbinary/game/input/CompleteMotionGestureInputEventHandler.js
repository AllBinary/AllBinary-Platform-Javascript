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
import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
import { BasicEventHandler } from '../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
export class CompleteMotionGestureInputEventHandler extends BasicEventHandler {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CompleteMotionGestureInputEventHandler.SINGLETON;
    }
    constructor() {
        super();
        this.list = new BasicArrayListD();
    }
    addListener(completeMotionGestureInputEventListener) {
        if (!this.list.contains(completeMotionGestureInputEventListener)) {
            this.list.add(completeMotionGestureInputEventListener);
        }
    }
    removeAllListeners() {
        this.list.clear();
        super.removeAllListeners();
    }
    removeListener(eventListenerInterface) {
        this.list.remove(eventListenerInterface);
        super.removeListener(eventListenerInterface);
    }
    //@Throws(Exception.constructor)
    fireEvent(eventObject) {
        for (var index = this.list.size(); --index >= 0;) {
            try {
                var completeMotionGestureInputEventListener = this.list.objectArray[index];
                ;
                completeMotionGestureInputEventListener.onCompleteMotionGestureInputEvent(eventObject);
                //: 
            }
            catch (e) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, EventStrings.getInstance().FIRE_EVENT, e);
            }
        }
        super.fireEvent(eventObject);
    }
    //@Throws(Exception.constructor)
    process(eventObject, eventListenerInterface) {
        var completeMotionGestureInputEventListenerInterface = eventListenerInterface;
        ;
        completeMotionGestureInputEventListenerInterface.onCompleteMotionGestureInputEvent(eventObject);
    }
}
CompleteMotionGestureInputEventHandler.SINGLETON = new CompleteMotionGestureInputEventHandler();
