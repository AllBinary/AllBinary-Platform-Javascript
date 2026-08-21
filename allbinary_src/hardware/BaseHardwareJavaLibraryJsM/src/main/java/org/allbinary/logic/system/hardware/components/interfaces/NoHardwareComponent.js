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
import { Object } from '../../../../../../../java/lang/Object.js';
import { StringUtil } from '../../../../../../../org/allbinary/logic/string/StringUtil.js';
export class NoHardwareComponent extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NoHardwareComponent.instance;
    }
    compareTo(componentInterface) {
        if (this == componentInterface) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().NULL_STRING;
    }
}
NoHardwareComponent.instance = new NoHardwareComponent();
