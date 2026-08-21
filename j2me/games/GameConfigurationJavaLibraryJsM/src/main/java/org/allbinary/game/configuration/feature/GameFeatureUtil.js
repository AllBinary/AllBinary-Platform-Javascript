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
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
import { EnumerationUtil } from '../../../../../org/allbinary/util/EnumerationUtil.js';
import { HashtableUtil } from '../../../../../org/allbinary/util/HashtableUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Features } from './Features.js';
import { Feature } from './Feature.js';
import { GameFeatureChoiceGroups } from './GameFeatureChoiceGroups.js';
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
        var stringBuffer = new StringMaker();
        ;
        var METHOD_NAME = "setDefault";
        ;
        var SELECTED_ARRAY_RETURN = "selectedArray_return[";
        ;
        var SELECTED_SEP = "] = ";
        ;
        var selectedArray_return = new Array(choiceGroup.size());
        ;
        var total = choiceGroup.getSelectedFlags(selectedArray_return);
        ;
        stringBuffer.append("Multiple Total Choices: ");
        stringBuffer.appendint(total);
        this.logUtil.putF(stringBuffer.toString(), this, METHOD_NAME);
        var features = Features.getInstance();
        ;
        for (var index = 0; index < selectedArray_return.length; index++) {
            var isSelected = selectedArray_return[index];
            ;
            stringBuffer.delete(0, stringBuffer.length());
            stringBuffer.append(SELECTED_ARRAY_RETURN);
            stringBuffer.appendint(index);
            stringBuffer.append(SELECTED_SEP);
            stringBuffer.appendboolean(isSelected);
            this.logUtil.putF(stringBuffer.toString(), this, METHOD_NAME);
            var selectedChoiceLabel = choiceGroup.getString(index);
            ;
            var gameFeature = Feature.getInstance(selectedChoiceLabel);
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
        var stringBuffer = new StringMaker();
        ;
        var METHOD_NAME = "updateMultiple";
        ;
        var SELECTED_ARRAY_RETURN = "selectedArray_return[";
        ;
        var SELECTED_SEP = "] = ";
        ;
        var selectedArray_return = new Array(choiceGroup.size());
        ;
        var total = choiceGroup.getSelectedFlags(selectedArray_return);
        ;
        stringBuffer.append("Multiple Total Choices: ");
        stringBuffer.appendint(total);
        this.logUtil.putF(stringBuffer.toString(), this, METHOD_NAME);
        var features = Features.getInstance();
        ;
        for (var index = 0; index < selectedArray_return.length; index++) {
            var isSelected = selectedArray_return[index];
            ;
            stringBuffer.delete(0, stringBuffer.length());
            stringBuffer.append(SELECTED_ARRAY_RETURN);
            stringBuffer.appendint(index);
            stringBuffer.append(SELECTED_SEP);
            stringBuffer.appendboolean(isSelected);
            this.logUtil.putF(stringBuffer.toString(), this, METHOD_NAME);
            var selectedChoiceLabel = choiceGroup.getString(index);
            ;
            var gameFeature = Feature.getInstance(selectedChoiceLabel);
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
        var stringBuffer = new StringMaker();
        ;
        var METHOD_NAME = "updateExclusive";
        ;
        var SELECTED_ARRAY_RETURN = "selectedArray_return[";
        ;
        var SELECTED_SEP = "] = ";
        ;
        var selectedArray_return = new Array(choiceGroup.size());
        ;
        var total = choiceGroup.getSelectedFlags(selectedArray_return);
        ;
        stringBuffer.append("Exclusive Total Choices: 1==");
        stringBuffer.appendint(total);
        this.logUtil.putF(stringBuffer.toString(), this, METHOD_NAME);
        for (var index = 0; index < selectedArray_return.length; index++) {
            var isSelected = selectedArray_return[index];
            ;
            stringBuffer.delete(0, stringBuffer.length());
            stringBuffer.append(SELECTED_ARRAY_RETURN);
            stringBuffer.appendint(index);
            stringBuffer.append(SELECTED_SEP);
            stringBuffer.appendboolean(isSelected);
            this.logUtil.putF(stringBuffer.toString(), this, METHOD_NAME);
            if (isSelected) {
                var selectedChoiceLabel = choiceGroup.getString(index);
                ;
                this.updateExclusive(selectedChoiceLabel);
            }
        }
    }
    isExclusive(itemLabel) {
        var enumeration = GameFeatureChoiceGroups.getExclusiveInstance().get().keys();
        ;
        var name;
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
        var gameFeature = Feature.getInstance(selectedChoiceLabel);
        ;
        var hashtable = GameFeatureChoiceGroups.getExclusiveInstance().get();
        ;
        var objectArray = HashtableUtil.getInstance().getKeysAsArray(hashtable);
        ;
        var basicArrayList;
        ;
        var anyType;
        ;
        var size = objectArray.length;
        ;
        for (var index = 0; index < size; index++) {
            anyType = objectArray[index];
            basicArrayList = hashtable.get(anyType);
            this.updateExclusiveList(gameFeature, basicArrayList);
        }
    }
    //@Throws(Exception.constructor)
    updateExclusiveList(gameFeature, list) {
        if (list.contains(gameFeature)) {
            var features = Features.getInstance();
            ;
            var addIndex = list.indexOf(gameFeature);
            ;
            var size = list.size();
            ;
            for (var index = 0; index < size; index++) {
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
