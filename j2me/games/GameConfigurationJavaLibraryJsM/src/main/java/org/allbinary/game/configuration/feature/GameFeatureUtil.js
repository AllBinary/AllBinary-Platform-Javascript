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
//not GWT import const ChoiceGroup
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { EnumerationUtil } 
const EnumerationUtil = globalThis.org.allbinary.util.EnumerationUtil;
//not plain js import { HashtableUtil } 
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Features } from './Features.js';
//sameFolderImports - not GWT import - same folder const Features
import { Feature } from './Feature.js';
//sameFolderImports - not GWT import - same folder const Feature
import { GameFeatureChoiceGroups } from './GameFeatureChoiceGroups.js';
//sameFolderImports - not GWT import - same folder const GameFeatureChoiceGroups
export class GameFeatureUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.tsUtil = TsUtil.getInstance();
        this.enumerationUtil = EnumerationUtil.getInstance();
        this.ON_GAME_FEATURE_CHANGE = "onGameFeatureChange";
        this.GAME_FEATURE_CHANGED = "Game Feature Changed: ";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameFeatureUtil.instance;
    }
    //@Throws(Exception.constructor)
    setDefault(choiceGroup) {
        let stringBuffer = new StringMaker();
        ;
        let METHOD_NAME = "setDefault";
        ;
        let SELECTED_ARRAY_RETURN = "selectedArray_return[";
        ;
        let SELECTED_SEP = "] = ";
        ;
        let selectedArray_return = new Array(choiceGroup.size());
        ;
        let total = choiceGroup.getSelectedFlags(selectedArray_return);
        ;
        stringBuffer.append("Multiple Total Choices: ");
        stringBuffer.appendint(total);
        this.logUtil.putF(stringBuffer.toString(), this, METHOD_NAME);
        let features = Features.getInstance();
        ;
        for (let index = 0; index < selectedArray_return.length; index++) {
            let isSelected = selectedArray_return[index];
            ;
            stringBuffer.delete(0, stringBuffer.length());
            stringBuffer.append(SELECTED_ARRAY_RETURN);
            stringBuffer.appendint(index);
            stringBuffer.append(SELECTED_SEP);
            stringBuffer.appendboolean(isSelected);
            this.logUtil.putF(stringBuffer.toString(), this, METHOD_NAME);
            let selectedChoiceLabel = choiceGroup.getString(index);
            ;
            let gameFeature = Feature.getInstance(selectedChoiceLabel);
            ;
            if (features.isDefault(gameFeature)) {
                features.add(gameFeature);
                choiceGroup.setSelectedIndex(index, true);
            }
            else {
                features.remove(gameFeature);
                choiceGroup.setSelectedIndex(index, false);
            }
        }
    }
    //@Throws(Exception.constructor)
    updateMultiple(choiceGroup) {
        let stringBuffer = new StringMaker();
        ;
        let METHOD_NAME = "updateMultiple";
        ;
        let SELECTED_ARRAY_RETURN = "selectedArray_return[";
        ;
        let SELECTED_SEP = "] = ";
        ;
        let selectedArray_return = new Array(choiceGroup.size());
        ;
        let total = choiceGroup.getSelectedFlags(selectedArray_return);
        ;
        stringBuffer.append("Multiple Total Choices: ");
        stringBuffer.appendint(total);
        this.logUtil.putF(stringBuffer.toString(), this, METHOD_NAME);
        let features = Features.getInstance();
        ;
        for (let index = 0; index < selectedArray_return.length; index++) {
            let isSelected = selectedArray_return[index];
            ;
            stringBuffer.delete(0, stringBuffer.length());
            stringBuffer.append(SELECTED_ARRAY_RETURN);
            stringBuffer.appendint(index);
            stringBuffer.append(SELECTED_SEP);
            stringBuffer.appendboolean(isSelected);
            this.logUtil.putF(stringBuffer.toString(), this, METHOD_NAME);
            let selectedChoiceLabel = choiceGroup.getString(index);
            ;
            let gameFeature = Feature.getInstance(selectedChoiceLabel);
            ;
            if (!isSelected && features.isFeature(gameFeature)) {
                features.remove(gameFeature);
            }
            else if (isSelected && !features.isFeature(gameFeature)) {
                features.add(gameFeature);
            }
        }
    }
    //@Throws(Exception.constructor)
    updateExclusiveForChoiceGroup(choiceGroup) {
        let stringBuffer = new StringMaker();
        ;
        let METHOD_NAME = "updateExclusive";
        ;
        let SELECTED_ARRAY_RETURN = "selectedArray_return[";
        ;
        let SELECTED_SEP = "] = ";
        ;
        let selectedArray_return = new Array(choiceGroup.size());
        ;
        let total = choiceGroup.getSelectedFlags(selectedArray_return);
        ;
        stringBuffer.append("Exclusive Total Choices: 1==");
        stringBuffer.appendint(total);
        this.logUtil.putF(stringBuffer.toString(), this, METHOD_NAME);
        for (let index = 0; index < selectedArray_return.length; index++) {
            let isSelected = selectedArray_return[index];
            ;
            stringBuffer.delete(0, stringBuffer.length());
            stringBuffer.append(SELECTED_ARRAY_RETURN);
            stringBuffer.appendint(index);
            stringBuffer.append(SELECTED_SEP);
            stringBuffer.appendboolean(isSelected);
            this.logUtil.putF(stringBuffer.toString(), this, METHOD_NAME);
            if (isSelected) {
                let selectedChoiceLabel = choiceGroup.getString(index);
                ;
                this.updateExclusive(selectedChoiceLabel);
            }
        }
    }
    isExclusive(itemLabel) {
        let enumeration = GameFeatureChoiceGroups.getExclusiveInstance().get().keys();
        ;
        let name;
        ;
        while (this.enumerationUtil.hasMoreElements(enumeration)) {
            name = this.enumerationUtil.nextElement(enumeration);
            if (this.tsUtil.compareTo(itemLabel, name) == 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    updateExclusive(selectedChoiceLabel) {
        this.logUtil.putF(new StringMaker().append(CommonLabels.getInstance().ITEM_LABEL).append(selectedChoiceLabel).toString(), this, "updateExclusive");
        let gameFeature = Feature.getInstance(selectedChoiceLabel);
        ;
        let hashtable = GameFeatureChoiceGroups.getExclusiveInstance().get();
        ;
        let objectArray = HashtableUtil.getInstance().getKeysAsArray(hashtable);
        ;
        let basicArrayList;
        ;
        let anyType;
        ;
        let size = objectArray.length;
        ;
        for (let index = 0; index < size; index++) {
            anyType = objectArray[index];
            basicArrayList = hashtable.get(anyType);
            this.updateExclusiveList(gameFeature, basicArrayList);
        }
    }
    //@Throws(Exception.constructor)
    updateExclusiveList(gameFeature, list) {
        if (list.contains(gameFeature)) {
            let features = Features.getInstance();
            ;
            let addIndex = list.indexOf(gameFeature);
            ;
            let size = list.size();
            ;
            for (let index = 0; index < size; index++) {
                if (addIndex != index) {
                    features.remove(list.objectArray[index]);
                }
                else {
                    features.add(list.objectArray[index]);
                }
            }
        }
    }
}
GameFeatureUtil.instance = new GameFeatureUtil();
