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
import { Object } from '../../../../java/lang/Object.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
import { BasicColorFactory } from './BasicColorFactory.js';
export class SmallBasicColorCacheFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SmallBasicColorCacheFactory.instance;
    }
    constructor() {
        super();
        this.SIZE = 255;
        this.INDEX_TO_COLOR = new Array(this.SIZE);
        this.BASIC_COLOR_ARRAY = new Array(this.SIZE);
        this.colorIndex = 0;
    }
    add(basicDefaultColor) {
        this.BASIC_COLOR_ARRAY[this.colorIndex] = basicDefaultColor;
        this.INDEX_TO_COLOR[this.colorIndex] = basicDefaultColor.intValue();
        this.colorIndex++;
    }
    getAndOrCreate(colorAsInt) {
        var basicColor;
        ;
        for (var index = 0; index < this.SIZE; index++) {
            if (this.INDEX_TO_COLOR[index] == colorAsInt) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.BASIC_COLOR_ARRAY[index];
            }
        }
        var ALPHA_MASK = Math.round(0xFF000000);
        ;
        basicColor = BasicColorFactory.getInstance().createInstanceAN(colorAsInt & ALPHA_MASK, colorAsInt & 0x00FFFFFF, StringUtil.getInstance().EMPTY_STRING);
        this.add(basicColor);
        //if statement needs to be on the same line and ternary does not work the same way.
        return basicColor;
    }
}
SmallBasicColorCacheFactory.instance = new SmallBasicColorCacheFactory();
