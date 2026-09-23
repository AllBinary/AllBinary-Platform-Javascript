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
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import - same folder const DemoGameMidletState
export class DemoGameMidletEvent extends AllBinaryEventObject {
    constructor(anyType = {}, demoGameMidletState) {
        super(anyType);
        //For kotlin this is before the body of the constructor.
        this.demoGameMidletState = demoGameMidletState;
    }
    init(anyType = {}) {
        this.setSource(anyType);
    }
    setDemoGameMidletState(demoGameMidletState) {
        this.demoGameMidletState = demoGameMidletState;
    }
    getDemoGameMidletState() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.demoGameMidletState;
    }
}
