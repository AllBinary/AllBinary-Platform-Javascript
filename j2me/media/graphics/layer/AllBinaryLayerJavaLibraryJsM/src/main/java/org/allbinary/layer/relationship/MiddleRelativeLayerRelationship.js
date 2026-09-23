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
import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const AllBinaryLayer
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RelativeLayerRelationship } from './RelativeLayerRelationship.js';
//not GWT import - same folder const RelativeLayerRelationship
export class MiddleRelativeLayerRelationship extends RelativeLayerRelationship {
    constructor(layer) {
        super(layer, PointFactory.getInstance().createXY(layer.getHalfWidth(), layer.getHalfHeight()), BasicArrayListUtil.getInstance().getImmutableInstance());
        //For kotlin this is before the body of the constructor.
    }
}
