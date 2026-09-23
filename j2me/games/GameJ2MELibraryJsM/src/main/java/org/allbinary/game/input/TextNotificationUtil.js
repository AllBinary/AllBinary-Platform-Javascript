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
import { GameNotificationEvent } from '../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
//not GWT import const GameNotificationEvent
import { GameNotificationEventHandler } from '../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
//not GWT import const GameNotificationEventHandler
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
import { BooleanFactory } from '../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
import { ErrorSound } from '../../../../org/allbinary/media/audio/ErrorSound.js';
//not GWT import const ErrorSound
import { PrimaryPlayerQueueFactory } from '../../../../org/allbinary/media/audio/PrimaryPlayerQueueFactory.js';
//not GWT import const PrimaryPlayerQueueFactory
import { SelectSound } from '../../../../org/allbinary/media/audio/SelectSound.js';
//not GWT import const SelectSound
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TextNotificationUtil extends Object {
    constructor() {
        super(...arguments);
        this.TWO = SmallIntegerSingletonFactory.getInstance().getAt(2);
        this.FALSE = BooleanFactory.getInstance().FALSE;
        this.gameNotificationEventHandler = GameNotificationEventHandler.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TextNotificationUtil.instance;
    }
    //@Throws(Exception.constructor)
    fireError(message) {
        PrimaryPlayerQueueFactory.getInstance().add(ErrorSound.getInstance());
        this.fire(message);
    }
    //@Throws(Exception.constructor)
    fireNew(message) {
        PrimaryPlayerQueueFactory.getInstance().add(SelectSound.getInstance());
        this.fire(message);
    }
    //@Throws(Exception.constructor)
    fireSuccess(message) {
        PrimaryPlayerQueueFactory.getInstance().add(SelectSound.getInstance());
        this.fire(message);
    }
    //@Throws(Exception.constructor)
    fire(message) {
        var gameNotificationEvent = new GameNotificationEvent(this, message, this.TWO, BasicColorFactory.getInstance().RED, this.FALSE);
        ;
        this.gameNotificationEventHandler.fireEvent(gameNotificationEvent);
    }
}
TextNotificationUtil.instance = new TextNotificationUtil();
