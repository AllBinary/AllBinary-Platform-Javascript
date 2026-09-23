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
//not GWT import const EventListenerInterface
import { BasicEventHandler } from '../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
//not GWT import - same folder const MotionGestureEvent
export class ScrolledMotionGesturesHandler extends BasicEventHandler {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ScrolledMotionGesturesHandler.SINGLETON;
    }
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    process(eventObject, eventListenerInterface) {
        var baseMotionGestureEventListener = eventListenerInterface;
        ;
        baseMotionGestureEventListener.onScrolledMotionGestureEvent(eventObject);
    }
}
ScrolledMotionGesturesHandler.SINGLETON = new ScrolledMotionGesturesHandler();
