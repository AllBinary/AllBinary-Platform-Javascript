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
import { NullEventListener } from '../../../../../../org/allbinary/logic/util/event/NullEventListener.js';
import { BasicEventHandler } from '../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
export class GameNotificationEventHandler extends BasicEventHandler {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameNotificationEventHandler.instance;
    }
    constructor() {
        super();
        this.enabled = true;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    removeAllListeners() {
        var eventListenerInterface = NullEventListener.NULL_EVENT_LISTENER;
        ;
        var list = this.eventListenerInterfaceList;
        ;
        if (list.size() > 0) {
            eventListenerInterface = list.objectArray[0];
        }
        super.removeAllListeners();
        if (eventListenerInterface != NullEventListener.NULL_EVENT_LISTENER) {
            this.addListenerInterface(eventListenerInterface);
        }
    }
    //@Throws(Exception.constructor)
    process(eventObject, eventListenerInterface) {
        if (!this.enabled) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        var gameNotificationListenerInterface = eventListenerInterface;
        ;
        gameNotificationListenerInterface.onGameNotificationEvent(eventObject);
    }
}
GameNotificationEventHandler.instance = new GameNotificationEventHandler();
