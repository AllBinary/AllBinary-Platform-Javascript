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
import { Object } from '../../../../../../../java/lang/Object.js';
//not GWT import const ViewPositionFactoryInterface
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MineLayer } from './MineLayer.js';
//not GWT import - same folder const MineLayer
export class MineLayerFactory extends Object {
    constructor(viewPositionFactoryInterface) {
        super();
        this.viewPositionFactoryInterface = viewPositionFactoryInterface;
    }
    //@Throws(Exception.constructor)
    getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new MineLayer(this.viewPositionFactoryInterface.getInstance());
    }
}
