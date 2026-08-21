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
export class CachePolicy extends Object {
    constructor(name, maxTime, maxSize) {
        super();
        this.maxTime = 0;
        this.maxSize = 0;
        this.name = name;
        this.setMaxTime(maxTime);
        this.setMaxSize(maxSize);
    }
    getMaxTime() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.maxTime;
    }
    setMaxTime(maxTime) {
        this.maxTime = maxTime;
    }
    getMaxSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.maxSize;
    }
    setMaxSize(maxSize) {
        this.maxSize = maxSize;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
}
