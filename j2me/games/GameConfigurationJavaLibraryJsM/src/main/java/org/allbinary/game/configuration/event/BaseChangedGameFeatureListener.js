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
//not GWT import const Feature = globalThis.org.allbinary.game.configuration.feature.Feature;
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;
import { GameFeatureUtil } from '../../../../../org/allbinary/game/configuration/feature/GameFeatureUtil.js';
//not GWT import const GameFeatureUtil = globalThis.org.allbinary.game.configuration.feature.GameFeatureUtil;
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import - same folder const GameFeatureEvent = globalThis.org.allbinary.game.configuration.event.GameFeatureEvent;
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
