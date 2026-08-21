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
import { BasicEventHandler } from '../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
export class TrackingEventHandler extends BasicEventHandler {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TrackingEventHandler.instance;
    }
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    process(eventObject, eventListenerInterface) {
        var trackingEventListenerInterface = eventListenerInterface;
        ;
        trackingEventListenerInterface.onMovement(eventObject);
    }
}
TrackingEventHandler.instance = new TrackingEventHandler();
