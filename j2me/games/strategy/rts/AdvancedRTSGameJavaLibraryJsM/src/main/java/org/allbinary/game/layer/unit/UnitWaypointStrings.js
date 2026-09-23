/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class UnitWaypointStrings extends Object {
    constructor() {
        super(...arguments);
        this.WANDERING = "Order?";
        this.THINKING = "Thinking";
        this.THINKING_ABOUT_TARGET = "Hmmm";
        this.TARGET = "Target";
        this.KILL = "Kill!";
        this.STOP = "Stop";
        this.WAYPOINT_DESTROYED_SHORT = "Uh Oh";
        this.WAYPOINT_DESTROYED = "Waypoint Destroyed";
        this.ALL_VISITED_SHORT = "Arrived";
        this.ALL_VISITED = "All Visited";
        this.ALREADY_THERE_SHORT = "Again?";
        this.ALREADY_THERE = "Already There";
        this.NEXT_PATH_NODE = CommonLabels.getInstance().NEXT + " Path Node";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return UnitWaypointStrings.instance;
    }
}
UnitWaypointStrings.instance = new UnitWaypointStrings();
