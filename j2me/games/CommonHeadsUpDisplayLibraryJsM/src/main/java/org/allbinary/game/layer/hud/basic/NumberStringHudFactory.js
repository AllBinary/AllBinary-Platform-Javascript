/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
import { RuntimeException } from '../../../../../../java/lang/RuntimeException.js';
import { BasicHudFactory } from '../../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js';
import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NumberStringHud } from './NumberStringHud.js';
export class NumberStringHudFactory extends Object {
    constructor() {
        super(...arguments);
        this.NULL_NUMBER_STRING_HUD = this.createHud();
    }
    static getInstance() {
        if (NumberStringHudFactory.instance == NullUtil.getInstance()) {
            NumberStringHudFactory.instance = new NumberStringHudFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return NumberStringHudFactory.instance;
    }
    createHud() {
        try {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new NumberStringHud(StringUtil.getInstance().EMPTY_STRING, 9, BasicHudFactory.getInstance().ABSOLUTE, 1, 0, BasicColorFactory.getInstance().NULL_COLOR);
            //: 
        }
        catch (e) {
            var logUtil = LogUtil.getInstance();
            ;
            var commonStrings = CommonStrings.getInstance();
            ;
            logUtil.put(commonStrings.EXCEPTION, this, commonStrings.CONSTRUCTOR, e);
            throw new RuntimeException();
        }
    }
}
NumberStringHudFactory.instance = NullUtil.getInstance();
