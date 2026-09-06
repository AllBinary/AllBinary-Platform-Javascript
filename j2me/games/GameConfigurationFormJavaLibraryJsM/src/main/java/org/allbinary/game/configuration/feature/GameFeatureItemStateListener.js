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
//not plain js import { ChoiceGroup } 
const ChoiceGroup = globalThis.javax.microedition.lcdui.ChoiceGroup;
//not plain js import { Item } 
const Item = globalThis.javax.microedition.lcdui.Item;
//not plain js import { ItemStateListener } 
const ItemStateListener = globalThis.javax.microedition.lcdui.ItemStateListener;
import { GameConfigurationGauge } from '../../../../../org/allbinary/game/configuration/GameConfigurationGauge.js';
//not GWT import const GameConfigurationGauge = globalThis.org.allbinary.game.configuration.GameConfigurationGauge;
import { GameConfigurationUtil } from '../../../../../org/allbinary/game/configuration/GameConfigurationUtil.js';
//not GWT import const GameOptionsForm = globalThis.org.allbinary.game.configuration.GameOptionsForm;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameFeatureFactory } from './GameFeatureFactory.js';
//not GWT import - same folder const GameFeature = globalThis.org.allbinary.game.configuration.feature.GameFeature;
import { GameFeatureUtil } from './GameFeatureUtil.js';
//not GWT import - same folder const GameFeatureUtil = globalThis.org.allbinary.game.configuration.feature.GameFeatureUtil;
export class GameFeatureItemStateListener extends Object {
    static add(gameFeature) {
        if (!GameFeatureItemStateListener.toggleList.contains(gameFeature)) {
            GameFeatureItemStateListener.toggleList.add(gameFeature);
        }
    }
    constructor(gameOptionsForm) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.gameOptionsForm = gameOptionsForm;
        var gameFeatureFactory = GameFeatureFactory.getInstance();
        ;
        GameFeatureItemStateListener.add(gameFeatureFactory.ARTIFICIAL_INTELLEGENCE_PROCESSOR);
        GameFeatureItemStateListener.add(gameFeatureFactory.COLLIDABLE_INTERFACE_LAYER_PROCESSOR);
        GameFeatureItemStateListener.add(gameFeatureFactory.DAMAGE_FLOATERS);
        GameFeatureItemStateListener.add(gameFeatureFactory.DROPPED_ITEMS);
        GameFeatureItemStateListener.add(gameFeatureFactory.GAME_INPUT_LAYER_PROCESSOR);
        GameFeatureItemStateListener.add(gameFeatureFactory.HEALTH_BARS);
        GameFeatureItemStateListener.add(gameFeatureFactory.SOUND);
        GameFeatureItemStateListener.add(gameFeatureFactory.TICKABLE_LAYER_PROCESSOR);
    }
    itemStateChanged(item) {
        try {
            var itemLabel = item.getLabel();
            ;
            this.logUtil.putF(new StringMaker().append(CommonLabels.getInstance().ITEM_LABEL).append(itemLabel).toString(), this, "itemStateChanged");
            if (item instanceof GameConfigurationGauge) {
                GameConfigurationUtil.getInstance().change(this.gameOptionsForm, item);
            }
            else if (item instanceof ChoiceGroup) {
                var gameFeatureUtil = GameFeatureUtil.getInstance();
                ;
                if (gameFeatureUtil.isExclusive(itemLabel)) {
                    gameFeatureUtil.updateExclusiveForChoiceGroup(item);
                }
                else {
                    gameFeatureUtil.updateMultiple(item);
                }
            }
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, "itemStateChanged", e);
        }
    }
}
GameFeatureItemStateListener.toggleList = new BasicArrayListD();
