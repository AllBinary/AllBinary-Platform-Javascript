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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
import { BaseCircularPool } from '../../../org/allbinary/logic/util/cache/BaseCircularPool.js';
//not GWT import const BaseCircularPool = globalThis.org.allbinary.logic.util.cache.BaseCircularPool;
//not plain js import { CircularIndexUtil } from '../../../org/allbinary/util/CircularIndexUtil.js';
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//not GWT import const AllBinaryLayerFactoryInterface = globalThis.org.allbinary.layer.AllBinaryLayerFactoryInterface;
export class AllBinaryLayerCircularPool extends BaseCircularPool {
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    initAllBinaryLayerCircularPool(allbinaryLayerFactoryInterface, total) {
        this.circularIndexUtil = CircularIndexUtil.createInstance(total);
        this.OBJECT_ARRAY = new Array(total);
        for (var localIndex = 0; localIndex < total; localIndex++) {
            this.OBJECT_ARRAY[localIndex] = allbinaryLayerFactoryInterface.getInstance();
        }
    }
}
