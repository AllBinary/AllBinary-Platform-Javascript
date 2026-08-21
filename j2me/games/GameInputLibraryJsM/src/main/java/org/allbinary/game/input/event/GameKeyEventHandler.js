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
import { Object } from '../../../../../java/lang/Object.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PressGameKeyEventHandler } from './PressGameKeyEventHandler.js';
import { UpGameKeyEventHandler } from './UpGameKeyEventHandler.js';
import { DownGameKeyEventHandler } from './DownGameKeyEventHandler.js';
export class GameKeyEventHandler extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.pressGameKeyEventHandler = PressGameKeyEventHandler.getInstance();
        this.upGameKeyEventHandler = UpGameKeyEventHandler.getInstance();
        this.downGameKeyEventHandler = DownGameKeyEventHandler.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameKeyEventHandler.instance;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    removeAllListeners() {
        this.pressGameKeyEventHandler.removeAllListeners();
        this.upGameKeyEventHandler.removeAllListeners();
        this.downGameKeyEventHandler.removeAllListeners();
    }
    addListenerForPlayer(eventListenerInterface, playerInputId) {
        this.logUtil.putF(eventListenerInterface.toString(), this, this.commonStrings.ADD_LISTENER);
        this.pressGameKeyEventHandler.addListenerSingleThreaded(eventListenerInterface);
        this.upGameKeyEventHandler.getInstanceForPlayer(playerInputId).addListenerSingleThreaded(eventListenerInterface);
        this.downGameKeyEventHandler.getInstanceForPlayer(playerInputId).addListenerSingleThreaded(eventListenerInterface);
    }
    addListener(eventListenerInterface) {
        this.logUtil.putF(eventListenerInterface.toString(), this, this.commonStrings.ADD_LISTENER);
        this.pressGameKeyEventHandler.addListenerSingleThreaded(eventListenerInterface);
        this.upGameKeyEventHandler.addListenerSingleThreaded(eventListenerInterface);
        this.downGameKeyEventHandler.addListenerSingleThreaded(eventListenerInterface);
    }
    removeListener(eventListenerInterface) {
        this.logUtil.putF(eventListenerInterface.toString(), this, this.commonStrings.REMOVE_LISTENER);
        this.pressGameKeyEventHandler.removeListenerSingleThreaded(eventListenerInterface);
        this.upGameKeyEventHandler.removeListenerSingleThreaded(eventListenerInterface);
        this.downGameKeyEventHandler.removeListenerSingleThreaded(eventListenerInterface);
    }
}
GameKeyEventHandler.instance = new GameKeyEventHandler();
