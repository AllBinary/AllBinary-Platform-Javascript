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
import { Exception } from '../../../../../java/lang/Exception.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NumberInSameGroupSequence } from './NumberInSameGroupSequence.js';
//not GWT import - same folder const NumberInSameGroupSequence = globalThis.org.allbinary.game.ag.ai.NumberInSameGroupSequence;
import { NumberOnOwnGroupSequenceAI } from './NumberOnOwnGroupSequenceAI.js';
//not GWT import - same folder const NumberOnOwnGroupSequenceAI = globalThis.org.allbinary.game.ag.ai.NumberOnOwnGroupSequenceAI;
export class NumberOnOwnGroupSequenceAIFactory extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
    }
    //@Throws(Exception.constructor)
    getInstance(hashtable, artificialIntelligenceInterface, ownerLayerInterface, gameInput) {
        var integerArray = NumberInSameGroupSequence.getInstance().NUMBER_ON_SAME_TEAM_SEQUENCE;
        ;
        var list = new BasicArrayListD();
        ;
        for (var index = 0; index < integerArray.length; index++) {
            var integerCanBeNull = hashtable.get(integerArray[index]);
            ;
            if (integerCanBeNull ==
                null) {
                break;
            }
            list.add(integerCanBeNull);
        }
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("Total AI Properties: ");
        stringBuffer.appendint(list.size());
        stringBuffer.append(" == Total AI: ");
        stringBuffer.appendint(artificialIntelligenceInterface.length);
        stringBuffer.append(" + 1");
        var commonStrings = CommonStrings.getInstance();
        ;
        this.logUtil.putF(stringBuffer.toString(), this, commonStrings.GET_INSTANCE);
        if (artificialIntelligenceInterface.length - 1 > list.size()) {
            throw new Exception("Not enough AI properties.");
        }
        if (artificialIntelligenceInterface.length - 1 < list.size()) {
            throw new Exception("Too Many AI properties.");
        }
        var numberOnSameTeam = new Array(list.size());
        ;
        for (var index = 0; index < numberOnSameTeam.length; index++) {
            numberOnSameTeam[index] = list.objectArray[index];
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return new NumberOnOwnGroupSequenceAI(numberOnSameTeam, artificialIntelligenceInterface, ownerLayerInterface, gameInput);
    }
}
