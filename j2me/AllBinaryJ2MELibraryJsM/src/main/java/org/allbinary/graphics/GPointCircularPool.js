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
import { BaseCircularPool } from '../../../org/allbinary/logic/util/cache/BaseCircularPool.js';
//not GWT import const BaseCircularPool = globalThis.org.allbinary.logic.util.cache.BaseCircularPool;
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CustomGPoint } from './CustomGPoint.js';
//not GWT import - same folder const CustomGPoint = globalThis.org.allbinary.graphics.CustomGPoint;
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
