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
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ExplosionResources extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ExplosionResources.instance;
    }
    constructor() {
        super();
        this.EXPLOSION_90_RESOURCE = "/explosion_sprite_90_by_90.png";
        this.EXPLOSION_60_RESOURCE = "/explosion_sprite_60_by_60.png";
        this.HALF_EXPLOSION_RESOURCE = "/explosion_sprite_30_by_30.png";
        this.THIRD_EXPLOSION_RESOURCE = "/explosion_sprite_15_by_15.png";
    }
}
ExplosionResources.instance = new ExplosionResources();
