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
import { TouchFeature } from './TouchFeature.js';
export class TouchFeatureFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TouchFeatureFactory.instance;
    }
    constructor() {
        super();
        this.TOUCH_ENABLED = new TouchFeature("Touch Enabled");
        this.SHOW_SCREEN_BUTTONS = new TouchFeature("Show");
        this.AUTO_HIDE_SHOW_SCREEN_BUTTONS = new TouchFeature("Auto Hide (One Level)");
        this.HIDE_SCREEN_BUTTONS = new TouchFeature("Hide");
    }
}
TouchFeatureFactory.instance = new TouchFeatureFactory();
