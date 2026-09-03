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
//not plain js import { MathUtil } from '../../../org/allbinary/logic/math/MathUtil.js';
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DistanceUtil extends Object {
    constructor() {
        super(...arguments);
        this.mathUtil = MathUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DistanceUtil.instance;
    }
    getDistance(x1, y1, x2, y2) {
        var dx = x1 - x2;
        ;
        var dy = y1 - y2;
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return Math.round(this.mathUtil.sqrt((dx * dx) + (dy * dy)));
    }
}
DistanceUtil.instance = new DistanceUtil();
