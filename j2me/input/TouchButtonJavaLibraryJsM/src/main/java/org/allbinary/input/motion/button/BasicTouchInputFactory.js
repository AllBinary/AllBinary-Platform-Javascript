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
//not GWT import const InputToGameKeyMapping = globalThis.org.allbinary.game.input.mapping.InputToGameKeyMapping;
//not plain js import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TouchButtonInput } from './TouchButtonInput.js';
//not GWT import const TouchButtonInput = globalThis.org.allbinary.input.motion.button.TouchButtonInput;
export class BasicTouchInputFactory extends Object {
    static getInstance() {
        if (BasicTouchInputFactory.instance == NullUtil.getInstance().NULL_OBJECT) {
            BasicTouchInputFactory.instance = new BasicTouchInputFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicTouchInputFactory.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.initialized = false;
        this.list = new BasicArrayListD();
        var MAX = InputFactory.getInstance().MAX;
        ;
        this.SPECIAL_BUTTON_SEVEN_TESTING_ONLY = new TouchButtonInput(MAX - 41, "Button 7 - Testing Only May Cross Over Key Values");
        this.SPECIAL_BUTTON_EIGHT_TESTING_ONLY = new TouchButtonInput(MAX - 42, "Button 8 - Testing Only May Cross Over Key Values");
        this.SPECIAL_BUTTON_SIX = new TouchButtonInput(MAX - 30, "Button 6");
        this.SPECIAL_BUTTON_FIVE = new TouchButtonInput(MAX - 31, "Button 5");
        this.SPECIAL_BUTTON_FOUR = new TouchButtonInput(MAX - 32, "Button 4");
        this.SPECIAL_BUTTON_THREE = new TouchButtonInput(MAX - 33, "Button 3");
        this.SPECIAL_BUTTON_TWO = new TouchButtonInput(MAX - 34, "Button 2");
        this.SPECIAL_BUTTON_ONE = new TouchButtonInput(MAX - 35, "Button 1");
        this.UP = new TouchButtonInput(MAX - 36, "Up Button");
        this.LEFT = new TouchButtonInput(MAX - 37, "Left Button");
        this.RIGHT = new TouchButtonInput(MAX - 38, "Right Button");
        this.DOWN = new TouchButtonInput(MAX - 39, "Down Button");
        this.NONE = new TouchButtonInput(MAX - 40, "No Button");
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    init(inputToGameKeyMapping) {
        if (!this.initialized) {
            this.initialized = true;
            this.list.add(this.UP);
            this.list.add(this.LEFT);
            this.list.add(this.RIGHT);
            this.list.add(this.DOWN);
            this.list.add(this.SPECIAL_BUTTON_TWO);
            this.list.add(this.SPECIAL_BUTTON_FOUR);
            this.list.add(this.SPECIAL_BUTTON_THREE);
            this.list.add(this.SPECIAL_BUTTON_ONE);
            this.list.add(this.SPECIAL_BUTTON_FIVE);
            this.list.add(this.SPECIAL_BUTTON_SIX);
            this.list.add(this.SPECIAL_BUTTON_SIX);
            this.list.add(this.SPECIAL_BUTTON_SEVEN_TESTING_ONLY);
            this.list.add(this.SPECIAL_BUTTON_EIGHT_TESTING_ONLY);
            this.updateAllFromList(this.list, inputToGameKeyMapping);
        }
    }
    updateAll(inputToGameKeyMapping) {
        this.updateAllFromList(this.list, inputToGameKeyMapping);
    }
    updateAllFromList(list, inputToGameKeyMapping) {
        this.logUtil.putF(new StringMaker().append(CommonLabels.getInstance().START_LABEL).appendint(list.size()).toString(), this, "updateAll");
        var touchButtonInput;
        ;
        for (var index = list.size() - 1; index >= 0; index--) {
            touchButtonInput = list.objectArray[index];
            touchButtonInput.update(inputToGameKeyMapping);
        }
    }
    getList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list;
    }
}
BasicTouchInputFactory.instance = NullUtil.getInstance().NULL_OBJECT;
