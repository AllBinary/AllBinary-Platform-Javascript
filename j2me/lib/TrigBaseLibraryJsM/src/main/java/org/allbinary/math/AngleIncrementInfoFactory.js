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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AngleFactory } from './AngleFactory.js';
import { AngleIncrementInfo } from './AngleIncrementInfo.js';
export class AngleIncrementInfoFactory extends Object {
    constructor() {
        super(...arguments);
        this.angleIncrementInfo = new Array(Math.round(AngleFactory.getInstance().TOTAL_ANGLE));
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AngleIncrementInfoFactory.instance;
    }
    getAt(angleIncrement) {
        var halfAngleIncrement = (Math.round(angleIncrement) >> 1);
        ;
        var angleIncrementInfoCanBeNull = this.angleIncrementInfo[halfAngleIncrement];
        ;
        if (angleIncrementInfoCanBeNull ==
            null) {
            angleIncrementInfoCanBeNull = new AngleIncrementInfo(angleIncrement);
            this.angleIncrementInfo[halfAngleIncrement] = angleIncrementInfoCanBeNull;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return angleIncrementInfoCanBeNull;
    }
}
AngleIncrementInfoFactory.instance = new AngleIncrementInfoFactory();
