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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TrackingEvent } from './TrackingEvent.js';
//not GWT import const TrackingEvent = globalThis.org.allbinary.game.tracking.TrackingEvent;
import { TrackingEventHandler } from './TrackingEventHandler.js';
//not GWT import const TrackingEventHandler = globalThis.org.allbinary.game.tracking.TrackingEventHandler;
export class TrackingEventFactory extends Object {
    constructor() {
        super();
    }
    getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new TrackingEvent(TrackingEventHandler.getInstance());
    }
}
