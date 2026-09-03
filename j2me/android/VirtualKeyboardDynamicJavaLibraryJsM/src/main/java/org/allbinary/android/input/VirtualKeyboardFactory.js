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
import { AndroidInfoFactory } from '../../../../org/allbinary/android/AndroidInfoFactory.js';
//not GWT import const AndroidInfoFactory = globalThis.org.allbinary.android.AndroidInfoFactory;
import { VirtualKeyboardAPI1 } from '../../../../org/allbinary/android/input/api1/VirtualKeyboardAPI1.js';
//not GWT import const VirtualKeyboardAPI1 = globalThis.org.allbinary.android.input.api1.VirtualKeyboardAPI1;
import { VirtualKeyboardAPI3 } from '../../../../org/allbinary/android/input/api3/VirtualKeyboardAPI3.js';
//not GWT import const Activity = globalThis.android.app.Activity;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { VirtualKeyboard } from './VirtualKeyboard.js';
//not GWT import const VirtualKeyboard = globalThis.org.allbinary.android.input.VirtualKeyboard;
export class VirtualKeyboardFactory extends Object {
    static init(activity) {
        var SDK_VERSION = AndroidInfoFactory.getInstance().getVersion();
        ;
        if (SDK_VERSION <= 2) {
            VirtualKeyboardFactory.virtualKeyboard = new VirtualKeyboardAPI1(activity);
        }
        else {
            VirtualKeyboardFactory.virtualKeyboard = new VirtualKeyboardAPI3(activity);
        }
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return VirtualKeyboardFactory.virtualKeyboard;
    }
}
VirtualKeyboardFactory.virtualKeyboard = VirtualKeyboard.NULL_VIRTUAL_KEYBOARD;
