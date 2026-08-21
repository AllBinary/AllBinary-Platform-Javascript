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
import { BaseCircularPool } from '../../../org/allbinary/logic/util/cache/BaseCircularPool.js';
import { CircularIndexUtil } from '../../../org/allbinary/util/CircularIndexUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CustomGPoint } from './CustomGPoint.js';
export class GPointCircularPool extends BaseCircularPool {
    constructor(size) {
        super();
        this.circularIndexUtil = CircularIndexUtil.createInstance(size);
        this.OBJECT_ARRAY = new Array(size);
        for (var index = size - 1; index >= 0; index--) {
            this.OBJECT_ARRAY[index] = CustomGPoint.getInstance3(0, 0);
        }
    }
}
