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
import { RelativeRelationship } from '../../../../org/allbinary/graphics/RelativeRelationship.js';
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class RelativeLayerRelationship extends RelativeRelationship {
    constructor(layer, point, typesAllowedList) {
        super(point, typesAllowedList);
        this.layer = AllBinaryLayer.NULL_ALLBINARY_LAYER;
        //For kotlin this is before the body of the constructor.
        this.layer = layer;
    }
    getX() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.layer.getXP() + super.getX();
    }
    getY() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.layer.getYP() + super.getY();
    }
    getZ() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.layer.getZP() + super.getZ();
    }
}
