/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
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
import { Object } from '../../../../../../java/lang/Object.js';
//not GWT import const Group = globalThis.org.allbinary.game.identification.Group;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { WaypointEventHandler } from './WaypointEventHandler.js';
//not GWT import - same folder const WaypointEventHandler = globalThis.org.allbinary.game.layer.waypoint.event.WaypointEventHandler;
export class WaypointEventHandlerFactory extends Object {
    static getInstance(groupInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return WaypointEventHandlerFactory.eventHandlerArray[Math.round(groupInterface.getGroupId())];
        !;
    }
    static removeAll() {
        for (var index = WaypointEventHandlerFactory.eventHandlerArray.length - 1; index >= 0; index--) {
            WaypointEventHandlerFactory.eventHandlerArray[index].removeAllListeners();
        }
    }
}
WaypointEventHandlerFactory.eventHandlerArray = [
    new WaypointEventHandler(), new WaypointEventHandler(), new WaypointEventHandler(), new WaypointEventHandler(), new WaypointEventHandler(), new WaypointEventHandler(), new WaypointEventHandler(), new WaypointEventHandler(), new WaypointEventHandler(), new WaypointEventHandler()
];
