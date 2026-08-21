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
import { Object } from '../../../../../../../java/lang/Object.js';
import { Integer } from '../../../../../../../java/lang/Integer.js';
import { GameNotificationEvent } from '../../../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
import { BasicColorFactory } from '../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
import { NullUtil } from '../../../../../../../org/allbinary/logic/NullUtil.js';
import { BooleanFactory } from '../../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
import { StringUtil } from '../../../../../../../org/allbinary/logic/string/StringUtil.js';
import { BasicArrayListD } from '../../../../../../../org/allbinary/util/BasicArrayListD.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameNotification extends Object {
    constructor() {
        super(...arguments);
        this.stringList = new BasicArrayListD();
        this.timeList = new BasicArrayListD();
        this.colorList = new BasicArrayListD();
    }
    add(string, seconds, basicColor) {
        if (!this.stringList.contains(string)) {
            this.stringList.add(string);
            this.timeList.add(seconds);
            this.colorList.add(basicColor);
        }
    }
    clear() {
        this.stringList.clear();
        this.timeList.clear();
        this.colorList.clear();
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.stringList.size();
        ;
    }
}
GameNotification.NULL_GAME_NOTIFICATION_EVENT = new GameNotificationEvent(NullUtil.getInstance().NULL_OBJECT, StringUtil.getInstance().EMPTY_STRING, new Integer(0), BasicColorFactory.getInstance().RED, BooleanFactory.getInstance().FALSE);
