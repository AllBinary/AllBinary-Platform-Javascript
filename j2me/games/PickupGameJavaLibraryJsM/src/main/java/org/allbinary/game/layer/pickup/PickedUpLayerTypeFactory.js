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
import { Object } from '../../../../../java/lang/Object.js';
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PickedUpLayerType } from './PickedUpLayerType.js';
//not GWT import - same folder const PickedUpLayerType = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerType;
export class PickedUpLayerTypeFactory extends Object {
    constructor() {
        super(...arguments);
        this.NONE = new PickedUpLayerType(StringUtil.getInstance().NULL_STRING);
        this.BEAM = new PickedUpLayerType("BEAM");
        this.MINE = new PickedUpLayerType("MINE");
        this.PROJECTILE = new PickedUpLayerType("PROJECTILE");
        this.ENHANCEMENT = new PickedUpLayerType("Enhancement");
        this.MORPH = new PickedUpLayerType("Morph");
        this.PART = new PickedUpLayerType("Part");
        this.HEAL = new PickedUpLayerType("Heal");
        this.LIFE = new PickedUpLayerType("Life");
        this.POINTS = new PickedUpLayerType("Points");
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PickedUpLayerTypeFactory.instance;
    }
}
PickedUpLayerTypeFactory.instance = new PickedUpLayerTypeFactory();
