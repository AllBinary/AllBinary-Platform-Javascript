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
import { Exception } from '../../../java/lang/Exception.js';
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
import { BasicArrayListD } from '../../../org/allbinary/util/BasicArrayListD.js';
export class BasicLayerProcessor extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.list = new BasicArrayListD();
    }
    add(layerInterface) {
        if (!this.list.contains(layerInterface)) {
            this.list.add(layerInterface);
        }
    }
    //@Throws(Exception.constructor)
    process(allBinaryLayerManager) {
        throw new Exception(CommonStrings.getInstance().NOT_IMPLEMENTED);
    }
    getList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list;
    }
}
BasicLayerProcessor.NULL_LAYER_PROCESSOR = new BasicLayerProcessor();
