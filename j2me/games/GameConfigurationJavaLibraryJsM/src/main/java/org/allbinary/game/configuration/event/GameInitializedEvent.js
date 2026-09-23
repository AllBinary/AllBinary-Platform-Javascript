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
//not GWT import const ResourceLoadingLevel
import { ResourceLoadingLevelFactory } from '../../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js';
//not GWT import const ResourceLoadingLevelFactory
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameInitializedEvent extends AllBinaryEventObject {
    constructor(anyType = {}) {
        super(anyType);
        this.resourceLoadingLevel = ResourceLoadingLevelFactory.getInstance().LEVEL;
        this.level = 0;
        //For kotlin this is before the body of the constructor.
    }
    setLevel(level) {
        this.level = level;
        this.resourceLoadingLevel = ResourceLoadingLevelFactory.getInstance().LEVEL;
    }
    getLevel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.level;
    }
    setResourceLoadingLevel(resourceLoadingLevel) {
        this.resourceLoadingLevel = resourceLoadingLevel;
        this.level = this.resourceLoadingLevel.getLevel();
    }
    getResourceLoadingLevel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.resourceLoadingLevel;
    }
}
