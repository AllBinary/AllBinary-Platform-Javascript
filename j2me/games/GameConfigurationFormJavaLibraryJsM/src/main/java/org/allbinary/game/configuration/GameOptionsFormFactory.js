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
import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameOptionsForm } from './GameOptionsForm.js';
export class GameOptionsFormFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameOptionsFormFactory.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
    }
    init(commandListener, title, backgrounBasicColor, foregroundBasicColor) {
        try {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new GameOptionsForm(commandListener, title, backgrounBasicColor, foregroundBasicColor);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.INIT, e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return CommandForm.getNullCommandForm();
            ;
        }
    }
}
GameOptionsFormFactory.instance = new GameOptionsFormFactory();
