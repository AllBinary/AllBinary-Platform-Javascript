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
import { BasicHudFactory } from '../../../../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js';
//not GWT import const BasicHudFactory
import { BasicColorFactory } from '../../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameNotificationHud } from './GameNotificationHud.js';
//sameFolderImports - not GWT import - same folder const GameNotificationHud
export class NoGameGameNotificationHud extends GameNotificationHud {
    constructor() {
        super(BasicHudFactory.getInstance().TOPCENTER, BasicHudFactory.getInstance().HORIZONTAL, 2, BasicColorFactory.getInstance().RED);
        //For kotlin this is before the body of the constructor.
        this.updateMaxWidth = 40;
        this.updateMaxHeight = 14;
    }
}
