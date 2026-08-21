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
import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TouchButtonInput } from './TouchButtonInput.js';
export class BasicTouchInputFactory extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.SPECIAL_BUTTON_SIX = new TouchButtonInput(InputFactory.getInstance().MAX - 30, "Button 6");
        this.SPECIAL_BUTTON_FIVE = new TouchButtonInput(InputFactory.getInstance().MAX - 31, "Button 5");
        this.SPECIAL_BUTTON_FOUR = new TouchButtonInput(InputFactory.getInstance().MAX - 32, "Button 4");
        this.SPECIAL_BUTTON_THREE = new TouchButtonInput(InputFactory.getInstance().MAX - 33, "Button 3");
        this.SPECIAL_BUTTON_TWO = new TouchButtonInput(InputFactory.getInstance().MAX - 34, "Button 2");
        this.SPECIAL_BUTTON_ONE = new TouchButtonInput(InputFactory.getInstance().MAX - 35, "Button 1");
        this.UP = new TouchButtonInput(InputFactory.getInstance().MAX - 36, "Up Button");
        this.LEFT = new TouchButtonInput(InputFactory.getInstance().MAX - 37, "Left Button");
        this.RIGHT = new TouchButtonInput(InputFactory.getInstance().MAX - 38, "Right Button");
        this.DOWN = new TouchButtonInput(InputFactory.getInstance().MAX - 39, "Down Button");
        this.NONE = new TouchButtonInput(InputFactory.getInstance().MAX - 40, "No Button");
        this.initialized = false;
        this.list = new BasicArrayListD();
    }
    static getInstance() {
        if (BasicTouchInputFactory.instance == NullUtil.getInstance().NULL_OBJECT) {
            BasicTouchInputFactory.instance = new BasicTouchInputFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicTouchInputFactory.instance;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    init(inputToGameKeyMapping) {
        if (!this.initialized) {
            this.initialized = true;
            this.list.add(this.UP);
            this.list.add(this.LEFT);
            this.list.add(this.RIGHT);
            this.list.add(this.DOWN);
            this.list.add(SPECIAL_BUTTON_TWO);
            this.list.add(SPECIAL_BUTTON_FOUR);
            this.list.add(SPECIAL_BUTTON_THREE);
            this.list.add(SPECIAL_BUTTON_ONE);
            this.list.add(SPECIAL_BUTTON_FIVE);
            this.list.add(SPECIAL_BUTTON_SIX);
            this.updateAllList(this.list, inputToGameKeyMapping);
        }
    }
    updateAll(inputToGameKeyMapping) {
        this.updateAllList(this.getList(), inputToGameKeyMapping);
    }
    updateAllList(list, inputToGameKeyMapping) {
        this.logUtil.putF(new StringMaker().append(CommonLabels.getInstance().START).appendint(list.size()).toString(), this, "updateAll");
        for (var index = list.size() - 1; index >= 0; index--) {
            var touchButtonInput = list.get(index);
            ;
            touchButtonInput.update(inputToGameKeyMapping);
        }
    }
    getList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list;
    }
}
BasicTouchInputFactory.instance = NullUtil.getInstance().NULL_OBJECT;
