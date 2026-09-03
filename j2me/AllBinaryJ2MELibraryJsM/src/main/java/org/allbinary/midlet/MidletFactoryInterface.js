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
import { Object } from '../../../java/lang/Object.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { MIDlet } from '../../../javax/microedition/midlet/MIDlet.js';
const MIDlet = globalThis.javax.microedition.midlet.MIDlet;
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryMidlet } from './AllBinaryMidlet.js';
//not GWT import const AllBinaryMidlet = globalThis.org.allbinary.midlet.AllBinaryMidlet;
export class MidletFactoryInterface extends Object {
    getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AllBinaryMidlet.getNullInstance();
        ;
    }
}
