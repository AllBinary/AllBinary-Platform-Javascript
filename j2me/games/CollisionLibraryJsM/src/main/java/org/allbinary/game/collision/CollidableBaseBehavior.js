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
import { Object } from '../../../../java/lang/Object.js';
import { Exception } from '../../../../java/lang/Exception.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
import { LayerCollisionUtil } from './LayerCollisionUtil.js';
import { CollisionTypeFactory } from './CollisionTypeFactory.js';
export class CollidableBaseBehavior extends Object {
    constructor(collidable) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.layerCollisionUtil = LayerCollisionUtil.getInstance();
        this.collidable = true;
        this.collidable = collidable;
    }
    update() {
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.constructor.name.toString();
        ;
    }
    setCollidable(collidable) {
        this.collidable = collidable;
    }
    isCollidable(ownerLayer) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.collidable;
    }
    //@Throws(Exception.constructor)
    collide(ownerLayer, allbinaryCollidableLayer) {
        throw new Exception(new StringMaker().append(this.commonStrings.NOT_IMPLEMENTED).append(CommonLabels.getInstance().COLON_SEP).append(this.constructor.name.toString()).toString());
    }
    isCollision(ownerLayer, collisionLayer) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.layerCollisionUtil.isCollision(ownerLayer, collisionLayer);
        ;
    }
    isCollisionInterface(ownerLayer, collidableInterfaceCompositeInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.layerCollisionUtil.isCollision(ownerLayer, collidableInterfaceCompositeInterface);
        ;
    }
    //@Throws(Exception.constructor)
    collideInterface(ownerLayer, collidableInterfaceCompositeInterface) {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    paint(ownerLayer, graphics) {
    }
    getCollisionTypeWith(layerInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CollisionTypeFactory.getInstance().NONE;
    }
}
