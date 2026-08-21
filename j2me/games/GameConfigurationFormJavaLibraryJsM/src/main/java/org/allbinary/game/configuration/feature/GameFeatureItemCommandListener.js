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
import { Object } from '../../../../../java/lang/Object.js';
import { GameConfigurationGauge } from '../../../../../org/allbinary/game/configuration/GameConfigurationGauge.js';
import { GameConfigurationUtil } from '../../../../../org/allbinary/game/configuration/GameConfigurationUtil.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { MidletStrings } from '../../../../../org/allbinary/midlet/MidletStrings.js';
import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameFeatureItemCommandListener extends Object {
    constructor(gameOptionsForm) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.gameOptionsForm = gameOptionsForm;
    }
    commandAction(command, item) {
        try {
            var itemLabel = item.getLabel();
            ;
            this.logUtil.putF(new StringMaker().append(CommonLabels.getInstance().ITEM_LABEL).append(itemLabel).toString(), this, MidletStrings.getInstance().COMMAND_ACTION);
            if (item instanceof GameConfigurationGauge) {
                GameConfigurationUtil.getInstance().change(this.gameOptionsForm, item);
            }
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, MidletStrings.getInstance().COMMAND_ACTION, e);
        }
    }
}
