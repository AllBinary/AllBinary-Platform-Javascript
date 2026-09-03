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
//not GWT import const GameNotificationEvent = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEvent;
import { GameNotificationEventHandler } from '../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
//not GWT import const GameNotificationEventHandler = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEventHandler;
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
import { BooleanFactory } from '../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;
//not plain js import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
import { ErrorSound } from '../../../../org/allbinary/media/audio/ErrorSound.js';
//not GWT import const ErrorSound = globalThis.org.allbinary.media.audio.ErrorSound;
import { PrimaryPlayerQueueFactory } from '../../../../org/allbinary/media/audio/PrimaryPlayerQueueFactory.js';
//not GWT import const PrimaryPlayerQueueFactory = globalThis.org.allbinary.media.audio.PrimaryPlayerQueueFactory;
import { SelectSound } from '../../../../org/allbinary/media/audio/SelectSound.js';
//not GWT import const SelectSound = globalThis.org.allbinary.media.audio.SelectSound;
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
