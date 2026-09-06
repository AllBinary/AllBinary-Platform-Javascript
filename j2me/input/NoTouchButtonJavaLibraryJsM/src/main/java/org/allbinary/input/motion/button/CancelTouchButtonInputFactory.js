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
import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
//not GWT import const InputFactory = globalThis.org.allbinary.game.input.InputFactory;
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not GWT import - same folder const TouchButtonInput = globalThis.org.allbinary.input.motion.button.TouchButtonInput;
import { BasicTouchInputFactory } from './BasicTouchInputFactory.js';
//not GWT import - same folder const BasicTouchInputFactory = globalThis.org.allbinary.input.motion.button.BasicTouchInputFactory;
export class CancelTouchButtonInputFactory extends Object {
    static getInstance() {
        if (CancelTouchButtonInputFactory.instance == NullUtil.getInstance().NULL_OBJECT) {
            CancelTouchButtonInputFactory.instance = new CancelTouchButtonInputFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return CancelTouchButtonInputFactory.instance;
    }
    constructor() {
        super();
        this.cancelInputArray = new Array(InputFactory.getInstance().MAX);
        var basicTouchInputFactory = BasicTouchInputFactory.getInstance();
        ;
        for (var index = this.cancelInputArray.length - 1; index >= 0; index--) {
            this.cancelInputArray[index] = basicTouchInputFactory.NONE;
        }
        this.cancelInputArray[basicTouchInputFactory.UP.getId()] = basicTouchInputFactory.DOWN;
        this.cancelInputArray[basicTouchInputFactory.DOWN.getId()] = basicTouchInputFactory.UP;
        this.cancelInputArray[basicTouchInputFactory.LEFT.getId()] = basicTouchInputFactory.RIGHT;
        this.cancelInputArray[basicTouchInputFactory.RIGHT.getId()] = basicTouchInputFactory.LEFT;
    }
    getCancel(touchButtonInput) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cancelInputArray[touchButtonInput.getId()];
    }
}
CancelTouchButtonInputFactory.instance = NullUtil.getInstance().NULL_OBJECT;
