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
import { LocalPlayerInputIdFactory } from '../../../../../org/allbinary/game/input/LocalPlayerInputIdFactory.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DownGameKeyEventHandlerBase } from './DownGameKeyEventHandlerBase.js';
//not GWT import const DownGameKeyEventHandlerBase = globalThis.org.allbinary.game.input.event.DownGameKeyEventHandlerBase;
export class DownGameKeyEventHandler extends DownGameKeyEventHandlerBase {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DownGameKeyEventHandler.instance;
    }
    getInstanceForDevice(deviceId) {
        var playerInputId = this.playerInputIdFactory.getPlayerForDevice(deviceId);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return DownGameKeyEventHandler.instanceArray[playerInputId];
    }
    getInstanceForPlayer(playerInputId) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DownGameKeyEventHandler.instanceArray[playerInputId];
    }
    constructor() {
        super();
        this.playerInputIdFactory = LocalPlayerInputIdFactory.getInstance();
    }
    removeAllListeners() {
        super.removeAllListeners();
        for (var index = DownGameKeyEventHandler.instanceArray.length - 1; index >= 0; index--) {
            DownGameKeyEventHandler.instanceArray[index].removeAllListeners();
        }
    }
    removeListenerSingleThreaded(eventListenerInterface) {
        super.removeListenerSingleThreaded(eventListenerInterface);
        for (var index = DownGameKeyEventHandler.instanceArray.length - 1; index >= 0; index--) {
            DownGameKeyEventHandler.instanceArray[index].removeListenerSingleThreaded(eventListenerInterface);
        }
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    removeListener(eventListenerInterface) {
        super.removeListener(eventListenerInterface);
        for (var index = DownGameKeyEventHandler.instanceArray.length - 1; index >= 0; index--) {
            DownGameKeyEventHandler.instanceArray[index].removeListener(eventListenerInterface);
        }
    }
}
DownGameKeyEventHandler.instance = new DownGameKeyEventHandler();
DownGameKeyEventHandler.instanceArray = [
    new DownGameKeyEventHandlerBase(), new DownGameKeyEventHandlerBase(), new DownGameKeyEventHandlerBase(), new DownGameKeyEventHandlerBase(), new DownGameKeyEventHandlerBase(), new DownGameKeyEventHandlerBase()
];
