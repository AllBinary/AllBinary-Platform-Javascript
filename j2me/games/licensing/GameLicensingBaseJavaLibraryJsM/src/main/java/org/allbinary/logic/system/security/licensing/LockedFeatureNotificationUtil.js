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
import { Object } from '../../../../../../java/lang/Object.js';
import { GameNotificationEvent } from '../../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
//not GWT import const GameNotificationEvent
import { GameNotificationEventHandler } from '../../../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
//not GWT import const BasicColor
import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
import { BooleanFactory } from '../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory
import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
import { ErrorSound } from '../../../../../../org/allbinary/media/audio/ErrorSound.js';
//not GWT import const ErrorSound
import { PrimaryPlayerQueueFactory } from '../../../../../../org/allbinary/media/audio/PrimaryPlayerQueueFactory.js';
//not GWT import const PrimaryPlayerQueueFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LicenseStrings } from './LicenseStrings.js';
//not GWT import - same folder const LicenseStrings
export class LockedFeatureNotificationUtil extends Object {
    constructor() {
        super(...arguments);
        this.gameNotificationEvent = new GameNotificationEvent(this, LicenseStrings.getInstance().LOCKED, SmallIntegerSingletonFactory.getInstance().getAt(3), BasicColorFactory.getInstance().RED, BooleanFactory.getInstance().FALSE);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LockedFeatureNotificationUtil.instance;
    }
    //@Throws(Exception.constructor)
    fire() {
        PrimaryPlayerQueueFactory.getInstance().add(ErrorSound.getInstance());
        GameNotificationEventHandler.getInstance().fireEvent(this.gameNotificationEvent);
    }
    //@Throws(Exception.constructor)
    fireWithColor(basicColor) {
        PrimaryPlayerQueueFactory.getInstance().add(ErrorSound.getInstance());
        this.gameNotificationEvent.setBasicColorP(basicColor);
        GameNotificationEventHandler.getInstance().fireEvent(this.gameNotificationEvent);
    }
}
LockedFeatureNotificationUtil.instance = new LockedFeatureNotificationUtil();
