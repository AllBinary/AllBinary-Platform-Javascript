/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
import { TouchScreenType } from './TouchScreenType.js';
//not GWT import - same folder const TouchScreenType = globalThis.org.allbinary.input.motion.button.TouchScreenType;
export class TouchScreenTypesFactory extends Object {
    constructor() {
        super(...arguments);
        this.FINGER = new TouchScreenType("Finger");
        this.NOTOUCH = new TouchScreenType("No Touch");
        this.STYLUS = new TouchScreenType("Stylus");
        this.UNDEFINED = new TouchScreenType("Undefined");
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TouchScreenTypesFactory.instance;
    }
}
TouchScreenTypesFactory.instance = new TouchScreenTypesFactory();
