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
import { ChoiceGroup } from '../../../../../javax/microedition/lcdui/ChoiceGroup.js';
//not GWT import const Item
import { NullImage } from '../../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage
import { GameConfigurationGauge } from '../../../../../org/allbinary/game/configuration/GameConfigurationGauge.js';
//not GWT import const GameConfigurationGauge
import { GameConfigurationUtil } from '../../../../../org/allbinary/game/configuration/GameConfigurationUtil.js';
//not GWT import const CommandForm
import { MEUtil } from '../../../../../org/allbinary/logic/MEUtil.js';
//not GWT import const MEUtil
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { HashtableUtil } 
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Features } from './Features.js';
//not GWT import - same folder const Feature
import { GameFeatureUtil } from './GameFeatureUtil.js';
//not GWT import - same folder const GameFeatureUtil
export class GameFeatureFormUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.meUtil = MEUtil.getInstance();
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
        var size = hashtable.size();
        ;
        var objectArray = HashtableUtil.getInstance().getKeysAsArray(hashtable);
        ;
        var name;
        ;
        for (var index = 0; index < size; index++) {
            name = objectArray[index];
            stringMaker.delete(0, stringMaker.length());
            this.logUtil.putF(stringMaker.append(ADDING_CHOICE_GROUP).append(name).toString(), this, ADD_CHOICE_GROUP);
            this.meUtil.appendItem(form, this.getChoiceGroup(hashtable, name, option));
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
