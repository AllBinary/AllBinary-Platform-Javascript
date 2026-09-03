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
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
//not plain js import { ChoiceGroup } from '../../../../../javax/microedition/lcdui/ChoiceGroup.js';
const ChoiceGroup = globalThis.javax.microedition.lcdui.ChoiceGroup;
//not plain js import { Item } from '../../../../../javax/microedition/lcdui/Item.js';
const Item = globalThis.javax.microedition.lcdui.Item;
import { NullImage } from '../../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;
import { GameConfigurationGauge } from '../../../../../org/allbinary/game/configuration/GameConfigurationGauge.js';
//not GWT import const GameConfigurationGauge = globalThis.org.allbinary.game.configuration.GameConfigurationGauge;
import { GameConfigurationUtil } from '../../../../../org/allbinary/game/configuration/GameConfigurationUtil.js';
//not GWT import const CommandForm = globalThis.org.allbinary.graphics.displayable.screen.CommandForm;
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { HashtableUtil } from '../../../../../org/allbinary/util/HashtableUtil.js';
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Features } from './Features.js';
//not GWT import const Feature = globalThis.org.allbinary.game.configuration.feature.Feature;
import { GameFeatureUtil } from './GameFeatureUtil.js';
//not GWT import const GameFeatureUtil = globalThis.org.allbinary.game.configuration.feature.GameFeatureUtil;
export class GameFeatureFormUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameFeatureFormUtil.instance;
    }
    getChoiceGroup(hashtable, name, option) {
        var stringMaker = new StringMaker();
        ;
        var choiceGroup = new ChoiceGroup(name, option, StringUtil.getInstance().getArrayInstance(), NullImage.NULL_IMAGE_ARRAY);
        ;
        var list = hashtable.get(name);
        ;
        var features = Features.getInstance();
        ;
        var ADD_CHOICE = ": Adding Choice: ";
        ;
        var GET_CHOICE_GROUP = "getChoiceGroup";
        ;
        var size = list.size();
        ;
        for (var index = 0; index < size; index++) {
            var gameFeature = list.objectArray[index];
            ;
            stringMaker.delete(0, stringMaker.length());
            this.logUtil.putF(stringMaker.append(name).append(ADD_CHOICE).append(gameFeature.toString()).toString(), this, GET_CHOICE_GROUP);
            choiceGroup.append(gameFeature.toString(), NullImage.NULL_IMAGE);
            if (features.isFeature(gameFeature)) {
                choiceGroup.setSelectedIndex(index, true);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return choiceGroup;
    }
    addChoiceGroup(form, hashtable, option) {
        var stringMaker = new StringMaker();
        ;
        var ADDING_CHOICE_GROUP = "Adding Choice Group: ";
        ;
        var ADD_CHOICE_GROUP = "addChoiceGroup";
        ;
        var size = hashtable.length;
        ;
        var objectArray = HashtableUtil.getInstance().getKeysAsArray(hashtable);
        ;
        for (var index = 0; index < size; index++) {
            var name = objectArray[index];
            ;
            stringMaker.delete(0, stringMaker.length());
            this.logUtil.putF(stringMaker.append(ADDING_CHOICE_GROUP).append(name).toString(), this, ADD_CHOICE_GROUP);
            form.append(this.getChoiceGroup(hashtable, name, option));
        }
    }
    //@Throws(Exception.constructor)
    setDefault(form) {
        var size = form.size();
        ;
        for (var index = 0; index < size; index++) {
            var item = form.get(index);
            ;
            if (item instanceof GameConfigurationGauge) {
                GameConfigurationUtil.getInstance().setDefault(item);
            }
            else if (item instanceof ChoiceGroup) {
                GameFeatureUtil.getInstance().setDefault(item);
            }
        }
    }
}
GameFeatureFormUtil.instance = new GameFeatureFormUtil();
