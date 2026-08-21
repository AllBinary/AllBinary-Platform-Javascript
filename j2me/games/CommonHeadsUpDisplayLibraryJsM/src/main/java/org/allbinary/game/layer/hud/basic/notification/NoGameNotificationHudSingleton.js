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
import { BasicHudFactory } from '../../../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js';
import { BasicColorFactory } from '../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameNotificationHud } from './GameNotificationHud.js';
export class NoGameNotificationHudSingleton extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NoGameNotificationHudSingleton.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.gameNotificationHud = GameNotificationHud.NULL_GAME_NOTIFICATION;
        try {
            var basicHudFactory = BasicHudFactory.getInstance();
            ;
            //inner=true member= isStatic=
            class NoGameGameNotificationHud extends GameNotificationHud {
                constructor() {
                    super(basicHudFactory.TOPCENTER, basicHudFactory.HORIZONTAL, 2, BasicColorFactory.getInstance().RED);
                    //For kotlin this is before the body of the constructor.
                    this.updateMaxWidth = 40;
                    this.updateMaxHeight = 14;
                }
            }
            //Otherwise - statement - EmptyStmt
            this.gameNotificationHud = new NoGameGameNotificationHud();
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.CONSTRUCTOR, e);
        }
    }
    getGameNotificationHud() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameNotificationHud;
    }
}
NoGameNotificationHudSingleton.instance = new NoGameNotificationHudSingleton();
