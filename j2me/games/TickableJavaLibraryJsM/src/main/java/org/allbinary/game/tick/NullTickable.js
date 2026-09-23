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
//not GWT import - same folder const TickableInterface
export class NullTickable extends Object {
    constructor() {
        super(...arguments);
        this.NAME = "NulLTickable";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullTickable.SINGLETON;
    }
    //@Throws(Exception.constructor)
    processTick(allBinaryLayerManager) {
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.NAME;
    }
}
NullTickable.SINGLETON = new NullTickable();
