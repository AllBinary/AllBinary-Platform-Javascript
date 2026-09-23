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
import { Exception } from '../../../../../java/lang/Exception.js';
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import - same folder const DestroyableInterface
export class DestroyableBaseBehavior extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DestroyableBaseBehavior.instance;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.constructor.name.toString();
        ;
    }
    //@Throws(Exception.constructor)
    isDestroyed() {
        throw new Exception(CommonStrings.getInstance().NOT_IMPLEMENTED);
    }
    setDestroyed(destroyed) {
    }
}
DestroyableBaseBehavior.instance = new DestroyableBaseBehavior();
