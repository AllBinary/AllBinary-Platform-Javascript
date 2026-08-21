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
import { InputFeature } from './InputFeature.js';
import { Features } from './Features.js';
export class InputFeatureFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return InputFeatureFactory.instance;
    }
    constructor() {
        super();
        this.REMOVE_DUPLICATE_KEY_PRESSES = new InputFeature("Remove Duplicate Key Presses");
        this.INPUT_MAPPING = new InputFeature("Input Mapping");
        this.MULTI_KEY_PRESS = new InputFeature("Multi Key Press");
        this.SINGLE_KEY_REPEAT_PRESS = new InputFeature("Single Key Repeat Press");
        this.SINGLE_KEY_PRESS = new InputFeature("Single Key Press");
    }
    isSingleKeyProcessing() {
        var features = Features.getInstance();
        ;
        if (features.isFeature(this.SINGLE_KEY_REPEAT_PRESS) || features.isFeature(this.SINGLE_KEY_PRESS)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
}
InputFeatureFactory.instance = new InputFeatureFactory();
