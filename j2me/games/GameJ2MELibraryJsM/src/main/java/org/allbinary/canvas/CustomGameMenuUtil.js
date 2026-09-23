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
import { Object } from '../../../java/lang/Object.js';
import { AppletUtil } from '../../../org/allbinary/AppletUtil.js';
//not GWT import const AppletUtil
import { J2MEUtil } from '../../../org/allbinary/J2MEUtil.js';
//not GWT import const J2MEUtil
import { GameCommandsFactory } from '../../../org/allbinary/game/commands/GameCommandsFactory.js';
//not GWT import const MyCanvas
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CustomGameMenuUtil extends Object {
    static add(canvas) {
        var gameCommandsFactory = GameCommandsFactory.getInstance();
        ;
        if (AppletUtil.isAppletLoader(canvas)) {
        }
        else if (J2MEUtil.isHTML()) {
        }
        else {
            canvas.addCommand(gameCommandsFactory.EXIT_COMMAND);
        }
    }
}
