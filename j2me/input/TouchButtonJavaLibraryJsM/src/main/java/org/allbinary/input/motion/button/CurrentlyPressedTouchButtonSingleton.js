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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const TouchButtonInput = globalThis.org.allbinary.input.motion.button.TouchButtonInput;
export class CurrentlyPressedTouchButtonSingleton extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CurrentlyPressedTouchButtonSingleton.instance;
    }
    constructor() {
        super();
        this.list = new BasicArrayListD();
    }
    size() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list.size();
        ;
    }
    removeAt(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list.removeAt(index);
    }
    remove(touchButtonInput) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list.remove(touchButtonInput);
        ;
    }
    get(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list.objectArray[index];
    }
    contains(touchButtonInput) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list.contains(touchButtonInput);
        ;
    }
    add(touchButtonInput) {
        this.list.add(touchButtonInput);
    }
}
CurrentlyPressedTouchButtonSingleton.instance = new CurrentlyPressedTouchButtonSingleton();
