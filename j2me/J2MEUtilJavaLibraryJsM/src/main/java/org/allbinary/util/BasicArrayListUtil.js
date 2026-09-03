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
import { Object } from '../../../java/lang/Object.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { MyRandomFactory } from '../../../org/allbinary/game/rand/MyRandomFactory.js';
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonLabels } from '../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonPhoneStrings } from '../../../org/allbinary/string/CommonPhoneStrings.js';
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js import { ImmutableBasicArrayList } from './ImmutableBasicArrayList.js';
const ImmutableBasicArrayList = globalThis.org.allbinary.util.ImmutableBasicArrayList;
//not plain js import { BasicArrayList } from './BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from './BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
export class BasicArrayListUtil extends Object {
    constructor() {
        super(...arguments);
        this.NULL_ARRAY_OF_ARRAY = new Array(0).fill(null).map(() => new Array(0).fill(0));
        this.myRandomFactory = MyRandomFactory.getInstance();
        this.immutableInstance = new ImmutableBasicArrayList("Immutable", 0);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicArrayListUtil.instance;
    }
    static main(args) {
        var commonPhoneStrings = CommonPhoneStrings.getInstance();
        ;
        var list = new BasicArrayListD();
        ;
        list.add(commonPhoneStrings.ONE);
        list.add(commonPhoneStrings.TWO);
        list.add(commonPhoneStrings.THREE);
        list.add(commonPhoneStrings.FOUR);
        list.add(commonPhoneStrings.FIVE);
        list.add(commonPhoneStrings.SIX);
        list.add(commonPhoneStrings.SEVEN);
        list.add(commonPhoneStrings.EIGHT);
        list.add(commonPhoneStrings.NINE);
        BasicArrayListUtil.getInstance().reverse(list);
        console.log(list.toString());
    }
    getRandom(list) {
        var i_random = this.getRandomIndex(list);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return list.objectArray[i_random];
    }
    getRandomIndex(list) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.myRandomFactory.getAbsoluteNextInt(list.size());
        ;
    }
    reverse(list) {
        var lastMinusOneIndex = list.size() - 2;
        ;
        var temp;
        ;
        var size = lastMinusOneIndex / 2;
        ;
        var secondSwapIndex = 0;
        ;
        for (var index = 0; index <= size; index++) {
            secondSwapIndex = lastMinusOneIndex - index;
            temp = list.removeAt(index);
            list.addAt(index, list.removeAt(secondSwapIndex));
            list.addAt(secondSwapIndex + 1, temp);
        }
    }
    log(list) {
        var S_LABEL = " s: ";
        ;
        var size = list.size();
        ;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(CommonLabels.getInstance().TOTAL_LABEL);
        stringBuffer.appendint(size);
        for (var index = size - 1; index >= 0; index--) {
            var usedList = list.objectArray[index];
            ;
            stringBuffer.append(S_LABEL);
            stringBuffer.appendint(usedList.size());
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    getImmutableInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.immutableInstance;
    }
}
BasicArrayListUtil.instance = new BasicArrayListUtil();
