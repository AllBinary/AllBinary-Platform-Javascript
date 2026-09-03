/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2003 AllBinary
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
//Current folder imports from return types, extended types, and scope (deduplicated)
export class RTSGameStrings extends Object {
    constructor() {
        super(...arguments);
        this.DRAG_TO_SPOT = "Please Drag";
        this.NOT_YOURS = "Not Yours";
        this.NEW_UNIT = "New Unit";
        this.NEW_WAYPOINT = "New Waypoint";
        this.BUILDING = "Building";
        this.UPGRADE = "Upgrading";
        this.DOWNGRADE = "Downgrading";
        this.NO_MONEY = "Not Enough Money";
        this.SPOT_TAKEN = "Spot Taken";
        this.BUILDING_COLLISION = "Building Collision";
        this.STRUCTURE_TO_CLOSE = "Building To Close";
        this.MAP_EDGE = "Map Edge";
        this.ROAD_COLLISION = "Road Collision";
        this.SELECT_BUILD_SPOT = "Select Build Spot";
        this.BUILD_ON_PATH = "Not On Path";
        this.DRAGGABLE = "Draggable";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return RTSGameStrings.instance;
    }
}
RTSGameStrings.instance = new RTSGameStrings();
