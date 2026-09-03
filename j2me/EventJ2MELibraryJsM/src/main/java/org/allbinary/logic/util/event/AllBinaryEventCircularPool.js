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
import { BaseCircularPool } from '../../../../../org/allbinary/logic/util/cache/BaseCircularPool.js';
//not GWT import const BaseCircularPool = globalThis.org.allbinary.logic.util.cache.BaseCircularPool;
//not plain js import { CircularIndexUtil } from '../../../../../org/allbinary/util/CircularIndexUtil.js';
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//not GWT import const AllBinaryEventObjectFactoryInterface = globalThis.org.allbinary.logic.util.event.AllBinaryEventObjectFactoryInterface;
export class AllBinaryEventCircularPool extends BaseCircularPool {
    constructor(max) {
        super();
        this.OBJECT_ARRAY = new Array(max);
        this.circularIndexUtil = CircularIndexUtil.createInstance(max);
    }
    initAllBinaryEventCircularPool(allBinaryEventObjectFactoryInterface) {
        this.circularIndexUtil.setIndex(0);
        var size = this.circularIndexUtil.getSize();
        ;
        for (var index = 0; index < size; index++) {
            this.OBJECT_ARRAY[index] = allBinaryEventObjectFactoryInterface.getInstance();
        }
    }
}
