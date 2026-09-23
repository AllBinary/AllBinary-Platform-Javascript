/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2002 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *    Created By: Travis Berthelot
*/
//not GWT import const EventListenerInterface
import { BasicEventHandler } from '../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
//not GWT import - same folder const WaypointEventListenerInterface
export class WaypointEventHandler extends BasicEventHandler {
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    process(eventObject, eventListenerInterface) {
        var waypointEventListenerInterface = eventListenerInterface;
        ;
        waypointEventListenerInterface.onWaypointEvent(eventObject);
    }
}
