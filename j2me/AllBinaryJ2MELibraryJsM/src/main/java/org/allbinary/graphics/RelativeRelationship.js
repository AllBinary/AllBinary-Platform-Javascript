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
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js - same folder import { PointFactory } 
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;
//not plain js - same folder import { GPoint } 
const GPoint = globalThis.org.allbinary.graphics.GPoint;
export class RelativeRelationship extends Object {
    constructor(point, typesAllowedList) {
        super();
        this.x = point.getX();
        this.y = point.getY();
        this.z = point.getZ();
        this.typesAllowedList = typesAllowedList;
    }
    getX() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.x;
    }
    getY() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.y;
    }
    getZ() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.z;
    }
    getTypesAllowedList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.typesAllowedList;
    }
    setTypesAllowedList(typesAllowedList) {
        this.typesAllowedList = typesAllowedList;
    }
}
RelativeRelationship.NULL_RELATIVE_RELATIONSHIP = new RelativeRelationship(PointFactory.getInstance().ZERO_ZERO, BasicArrayListUtil.getInstance().getImmutableInstance());
