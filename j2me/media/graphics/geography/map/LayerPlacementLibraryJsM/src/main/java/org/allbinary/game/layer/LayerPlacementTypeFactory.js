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
import { Integer } from '../../../../java/lang/Integer.js';
import { DirectionFactory } from '../../../../org/allbinary/direction/DirectionFactory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LayerPlacementType } from './LayerPlacementType.js';
export class LayerPlacementTypeFactory extends Object {
    constructor() {
        super(...arguments);
        this.MAP = new LayerPlacementType(Integer.MAX_VALUE);
        this.LEFT = new LayerPlacementType(DirectionFactory.getInstance().LEFT.getValue());
        this.DOWN = new LayerPlacementType(DirectionFactory.getInstance().DOWN.getValue());
        this.UP = new LayerPlacementType(DirectionFactory.getInstance().UP.getValue());
        this.RIGHT = new LayerPlacementType(DirectionFactory.getInstance().RIGHT.getValue());
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LayerPlacementTypeFactory.instance;
    }
}
LayerPlacementTypeFactory.instance = new LayerPlacementTypeFactory();
