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
//not GWT import const GameKey
import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
//not GWT import const Input
import { PlatformInputMappingFactory } from '../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
//not GWT import const BasicColor
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HelpPaintable } from './HelpPaintable.js';
//not GWT import - same folder const HelpPaintable
export class BasicInputMappingHelpPaintable extends HelpPaintable {
    constructor(gameInputMappingArray, basicColor) {
        super("Help Screen", BasicColorFactory.getInstance().BLACK, basicColor);
        this.NONE = GameKeyFactory.getInstance().NONE;
        //For kotlin this is before the body of the constructor.
        this.gameInputMappingArray = gameInputMappingArray;
        this.update(this.NONE, this.NONE);
    }
    update(selectedGameKey, selectedInput) {
        var gameKeyMapping = PlatformInputMappingFactory.getInstance().getPersistentInputMappingInstance();
        ;
        var EQUAL = " = ";
        ;
        var stringMaker = new StringMaker();
        ;
        var size = this.gameInputMappingArray.length;
        ;
        var keyInfo = new Array(size);
        ;
        var gameInputMapping;
        ;
        var gameKey;
        ;
        var list;
        ;
        for (var index = 0; index < size; index++) {
            gameInputMapping = this.gameInputMappingArray[index];
            gameKey = gameInputMapping.getGameKey();
            list = gameKeyMapping.getInputMapping().getMappedInput(gameKey);
            stringMaker.delete(0, stringMaker.length());
            keyInfo[index] = stringMaker.append(gameInputMapping.getName()).append(EQUAL).append(this.get(list)).toString();
        }
        super.setInputInfoP(keyInfo);
    }
    get(keyList) {
        var commonSeps = CommonSeps.getInstance();
        ;
        var stringBuffer = new StringMaker();
        ;
        var AND = "and ";
        ;
        var key;
        ;
        var size = keyList.size();
        ;
        for (var index = 0; index < size; index++) {
            key = keyList.objectArray[index];
            stringBuffer.append(key.getName());
            if (index + 1 < keyList.size()) {
                if (keyList.size() == 2) {
                    stringBuffer.append(commonSeps.SPACE).append(AND);
                }
                else {
                    if (index + 2 == keyList.size()) {
                        stringBuffer.append(commonSeps.COMMA_SEP);
                        stringBuffer.append(AND);
                    }
                    else {
                        stringBuffer.append(commonSeps.COMMA_SEP);
                    }
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
