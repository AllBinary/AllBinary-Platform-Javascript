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
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
import { GameFeatureUtil } from '../../../../../org/allbinary/game/configuration/feature/GameFeatureUtil.js';
import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
export class BaseChangedGameFeatureListener extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.gameFeatureUtil = GameFeatureUtil.getInstance();
        this.list = new BasicArrayListD();
        this.changed = true;
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(CommonStrings.getInstance().NOT_IMPLEMENTED, this);
    }
    onGameFeatureChange(gameFeatureEvent) {
        this.logUtil.putF(new StringMaker().append(this.gameFeatureUtil.GAME_FEATURE_CHANGED).append(gameFeatureEvent.getWhatChanged()).toString(), this, this.gameFeatureUtil.ON_GAME_FEATURE_CHANGE);
        this.list.add(gameFeatureEvent.getGameOption());
        this.setChanged(true);
    }
    add(gameFeature) {
        this.list.add(gameFeature);
    }
    remove(gameFeature) {
        this.list.remove(gameFeature);
    }
    setChanged(initialized) {
        this.changed = initialized;
        if (!this.isChanged()) {
            this.list.clear();
        }
    }
    isChangedFeature(gameFeature) {
        var isChanged = this.list.contains(gameFeature);
        ;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("GameFeature: ");
        stringBuffer.append(StringUtil.getInstance().toString(gameFeature));
        stringBuffer.append(" isFeature: ");
        stringBuffer.appendboolean(Features.getInstance().isFeature(gameFeature));
        stringBuffer.append(" isChanged: ");
        stringBuffer.appendboolean(isChanged);
        this.logUtil.putF(stringBuffer.toString(), this, "isChanged");
        //if statement needs to be on the same line and ternary does not work the same way.
        return isChanged;
    }
    isChanged() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.changed;
    }
}
