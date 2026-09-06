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
import { LocalPlayerInputIdFactory } from '../../../../../org/allbinary/game/input/LocalPlayerInputIdFactory.js';
//not GWT import const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { UpGameKeyEventHandlerBase } from './UpGameKeyEventHandlerBase.js';
//not GWT import - same folder const UpGameKeyEventHandlerBase = globalThis.org.allbinary.game.input.event.UpGameKeyEventHandlerBase;
export class UpGameKeyEventHandler extends UpGameKeyEventHandlerBase {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return UpGameKeyEventHandler.instance;
    }
    getInstanceForDevice(deviceId) {
        var playerInputId = this.playerInputIdFactory.getPlayerForDevice(deviceId);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return UpGameKeyEventHandler.instanceArray[playerInputId];
    }
    getInstanceForPlayer(playerInputId) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return UpGameKeyEventHandler.instanceArray[playerInputId];
    }
    constructor() {
        super();
        this.playerInputIdFactory = LocalPlayerInputIdFactory.getInstance();
    }
    removeAllListeners() {
        super.removeAllListeners();
        for (var index = UpGameKeyEventHandler.instanceArray.length - 1; index >= 0; index--) {
            UpGameKeyEventHandler.instanceArray[index].removeAllListeners();
        }
    }
    removeListenerSingleThreaded(eventListenerInterface) {
        super.removeListenerSingleThreaded(eventListenerInterface);
        for (var index = UpGameKeyEventHandler.instanceArray.length - 1; index >= 0; index--) {
            UpGameKeyEventHandler.instanceArray[index].removeListenerSingleThreaded(eventListenerInterface);
        }
    }
    removeListener(eventListenerInterface) {
        super.removeListener(eventListenerInterface);
        for (var index = UpGameKeyEventHandler.instanceArray.length - 1; index >= 0; index--) {
            UpGameKeyEventHandler.instanceArray[index].removeListener(eventListenerInterface);
        }
    }
}
UpGameKeyEventHandler.instance = new UpGameKeyEventHandler();
UpGameKeyEventHandler.instanceArray = [
    new UpGameKeyEventHandlerBase(), new UpGameKeyEventHandlerBase(), new UpGameKeyEventHandlerBase(), new UpGameKeyEventHandlerBase(), new UpGameKeyEventHandlerBase(), new UpGameKeyEventHandlerBase()
];
