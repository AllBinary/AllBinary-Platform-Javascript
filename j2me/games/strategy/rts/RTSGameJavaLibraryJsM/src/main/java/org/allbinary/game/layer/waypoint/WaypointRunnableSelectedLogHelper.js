/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//not GWT import const PathFindingLayerInterface
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { WaypointRunnableLogHelper } from './WaypointRunnableLogHelper.js';
//not GWT import - same folder const WaypointRunnableLogHelper
export class WaypointRunnableSelectedLogHelper extends WaypointRunnableLogHelper {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return WaypointRunnableSelectedLogHelper.instanceC;
    }
    start(pathFindingLayerInterface) {
        this.logUtil.putF(new StringMaker().append(pathFindingLayerInterface.getName()).append(this.commonStrings.START_RUNNABLE).toString(), this, this.commonStrings.RUN);
    }
    end(pathFindingLayerInterface) {
        this.logUtil.putF(new StringMaker().append(pathFindingLayerInterface.getName()).append(this.commonStrings.END_RUNNABLE).toString(), this, this.commonStrings.RUN);
    }
}
WaypointRunnableSelectedLogHelper.instanceC = new WaypointRunnableSelectedLogHelper();
