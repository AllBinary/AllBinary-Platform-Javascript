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
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicTerrainInfo } from './BasicTerrainInfo.js';
//not GWT import - same folder const BasicTerrainInfo = globalThis.org.allbinary.game.terrain.BasicTerrainInfo;
export class TerrainEvent extends AllBinaryEventObject {
    constructor(basicTerrainInfo = {}) {
        super(basicTerrainInfo);
        this.basicTerrainInfo = BasicTerrainInfo.NULL_BASIC_TERRAIN_INFO;
        //For kotlin this is before the body of the constructor.
        this.setBasicTerrainInfo(this.basicTerrainInfo);
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("TerrainEvent: \n");
        stringBuffer.append("LayerInterface: ");
        stringBuffer.append(this.basicTerrainInfo.toString());
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    getBasicTerrainInfo() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicTerrainInfo;
    }
    setBasicTerrainInfo(basicTerrainInfo) {
        this.basicTerrainInfo = basicTerrainInfo;
    }
    setBasicTerrainInfoForCircularStaticPool(basicTerrainInfo) {
        this.basicTerrainInfo = basicTerrainInfo;
    }
}
