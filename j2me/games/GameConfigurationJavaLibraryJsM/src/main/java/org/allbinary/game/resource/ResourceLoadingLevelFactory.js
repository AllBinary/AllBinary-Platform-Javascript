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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ResourceLoadingLevel } from './ResourceLoadingLevel.js';
//not GWT import - same folder const ResourceLoadingLevel
export class ResourceLoadingLevelFactory extends Object {
    constructor() {
        super(...arguments);
        this.LOAD_EARLY = new ResourceLoadingLevel("Load Early", Integer.MAX_VALUE);
        this.LOAD_TOUCH = new ResourceLoadingLevel("Load Touch", Integer.MAX_VALUE - 1);
        this.LOAD_GAME = new ResourceLoadingLevel("Load Game", Integer.MAX_VALUE - 2);
        this.LEVEL = new ResourceLoadingLevel("Level", Integer.MAX_VALUE - 99);
        this.MAX_LEVEL = new ResourceLoadingLevel("Max Level", Integer.MAX_VALUE - 100);
        this.LOAD_ALL = new ResourceLoadingLevel("Load All", -1);
        this.RESOURCE_LOADING_LEVEL_ARRAY = [
            this.LOAD_ALL, this.MAX_LEVEL, this.LEVEL, this.LOAD_GAME, this.LOAD_TOUCH, this.LOAD_EARLY
        ];
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ResourceLoadingLevelFactory.instance;
    }
    getLevelString(level) {
        for (var index = 0; index < this.RESOURCE_LOADING_LEVEL_ARRAY.length; index++) {
            if (level == this.RESOURCE_LOADING_LEVEL_ARRAY[index].getLevel()) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.RESOURCE_LOADING_LEVEL_ARRAY[index].getName();
                ;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return level.toString();
        ;
    }
}
ResourceLoadingLevelFactory.instance = new ResourceLoadingLevelFactory();
