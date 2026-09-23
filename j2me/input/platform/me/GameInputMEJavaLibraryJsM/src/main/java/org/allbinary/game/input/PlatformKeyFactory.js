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
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { J2MEGameKey } from './J2MEGameKey.js';
//not GWT import - same folder const J2MEGameKey
import { J2MEKeyFactory } from './J2MEKeyFactory.js';
//not GWT import - same folder const Input
export class PlatformKeyFactory extends Object {
    static getInstance() {
        if (PlatformKeyFactory.instance == NullUtil.getInstance().NULL_OBJECT) {
            PlatformKeyFactory.instance = new PlatformKeyFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return PlatformKeyFactory.instance;
    }
    getString(keyCode) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return J2MEGameKey.getString(keyCode);
        ;
    }
    isSubmission(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return J2MEKeyFactory.getInstance().isSubmission(input);
        ;
    }
    isDelete(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return J2MEKeyFactory.getInstance().isDelete(input);
        ;
    }
    isBackSpace(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return J2MEKeyFactory.getInstance().isBackSpace(input);
        ;
    }
    isLeft(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return J2MEKeyFactory.getInstance().isLeft(input);
        ;
    }
    isRight(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return J2MEKeyFactory.getInstance().isRight(input);
        ;
    }
    isUp(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return J2MEKeyFactory.getInstance().isUp(input);
        ;
    }
    isDown(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return J2MEKeyFactory.getInstance().isDown(input);
        ;
    }
    isEnter(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return J2MEKeyFactory.getInstance().isEnter(input);
        ;
    }
}
PlatformKeyFactory.instance = NullUtil.getInstance().NULL_OBJECT;
