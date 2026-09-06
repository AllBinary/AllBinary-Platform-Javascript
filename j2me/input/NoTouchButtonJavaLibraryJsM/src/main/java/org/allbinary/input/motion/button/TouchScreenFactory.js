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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TouchScreenTypesFactory } from './TouchScreenTypesFactory.js';
//not GWT import - same folder const TouchScreenType = globalThis.org.allbinary.input.motion.button.TouchScreenType;
export class TouchScreenFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TouchScreenFactory.SINGLETON;
    }
    constructor() {
        super();
        this.multiTouch = false;
        this.touch = false;
        this.touchScreenType = TouchScreenTypesFactory.getInstance().NOTOUCH;
    }
    isMultiTouch() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.multiTouch;
    }
    setTouch(touch) {
    }
    isTouch() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.touch;
    }
    getTouchScreenType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.touchScreenType;
    }
}
TouchScreenFactory.SINGLETON = new TouchScreenFactory();
