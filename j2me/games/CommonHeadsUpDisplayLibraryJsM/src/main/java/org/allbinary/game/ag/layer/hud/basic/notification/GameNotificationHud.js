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
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
import { BasicHud } from '../../../../../../../../org/allbinary/game/graphics/hud/BasicHud.js';
//not GWT import const BasicHud = globalThis.org.allbinary.game.graphics.hud.BasicHud;
import { BasicHudFactory } from '../../../../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorFactory } from '../../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;
import { EventStrings } from '../../../../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameNotification } from './GameNotification.js';
//not GWT import - same folder const GameNotification = globalThis.org.allbinary.game.ag.layer.hud.basic.notification.GameNotification;
export class GameNotificationHud extends BasicHud {
    constructor(location, direction, bufferZone, basicColor) {
        super(location, direction, bufferZone, basicColor);
        this.METHOD_NAME = "onGameNotificationEvent";
        this.lastGameNotificationEvent = GameNotification.NULL_GAME_NOTIFICATION_EVENT;
        //For kotlin this is before the body of the constructor.
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    //@Throws(Exception.constructor)
    onGameNotificationEvent(gameNotificationEvent) {
        if (this.lastGameNotificationEvent != gameNotificationEvent) {
            this.lastGameNotificationEvent = gameNotificationEvent;
            this.logUtil.putF(gameNotificationEvent.getString(), this, this.METHOD_NAME);
        }
        this.add(gameNotificationEvent.getString(), gameNotificationEvent.getSeconds(), gameNotificationEvent.getBasicColorP(), gameNotificationEvent.getPermanent());
    }
    add(string, seconds, basicColor, permanent) {
    }
    //@Throws(Exception.constructor)
    processTick() {
    }
    paint(graphics) {
    }
    clear() {
    }
}
GameNotificationHud.NULL_GAME_NOTIFICATION = new GameNotificationHud(BasicHudFactory.getInstance().TOPCENTER, BasicHudFactory.getInstance().HORIZONTAL, 0, BasicColorFactory.getInstance().RED);
