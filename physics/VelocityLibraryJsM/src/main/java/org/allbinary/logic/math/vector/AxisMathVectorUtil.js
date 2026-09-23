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
import { NoDecimalTrigTable } from '../../../../../org/allbinary/math/NoDecimalTrigTable.js';
//not GWT import const NoDecimalTrigTable
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AxisMathVectorUtil extends Object {
    constructor() {
        super(...arguments);
        this.noDecimalTrigTable = NoDecimalTrigTable.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AxisMathVectorUtil.instance;
    }
    calculateX(magnitude, angle) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return magnitude * this.noDecimalTrigTable.cos(angle) / 10;
    }
    calculateY(magnitude, angle) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return magnitude * this.noDecimalTrigTable.sin(angle) / 10;
    }
    calculateZ(magnitude, otherAngle) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return magnitude * this.noDecimalTrigTable.sin(otherAngle) / 10;
    }
}
AxisMathVectorUtil.instance = new AxisMathVectorUtil();
