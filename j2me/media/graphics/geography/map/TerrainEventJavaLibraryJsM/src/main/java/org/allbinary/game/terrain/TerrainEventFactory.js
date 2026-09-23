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
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not GWT import const AllBinaryEventObjectFactoryInterface
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TerrainEvent } from './TerrainEvent.js';
//not GWT import - same folder const TerrainEvent
export class TerrainEventFactory extends Object {
    constructor() {
        super();
    }
    getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new TerrainEvent(NullUtil.getInstance().NULL_OBJECT);
    }
}
