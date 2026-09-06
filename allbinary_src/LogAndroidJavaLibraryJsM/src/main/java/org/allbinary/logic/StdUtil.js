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
import { Object } from '../../../java/lang/Object.js';
//not plain js import { ABHashMap } 
const ABHashMap = globalThis.org.allbinary.util.ABHashMap;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { ABStack } 
const ABStack = globalThis.org.allbinary.util.ABStack;
//not plain js import { ABVector } 
const ABVector = globalThis.org.allbinary.util.ABVector;
//Current folder imports from return types, extended types, and scope (deduplicated)
//ActualPlatform
/*actual*/ export class StdUtil extends Object {
    constructor() {
        super(...arguments);
        /*actual*/ this.EMPTY_VECTOR = this.createVector();
        /*actual*/ this.NULL_TABLE = this.createHashtable();
        /*actual*/ this.NULL_MAP = this.createHashMap();
    }
    /*actual*/ static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StdUtil.instance;
    }
    createStack() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new ABStack();
    }
    createVector() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new ABVector();
    }
    createHashtable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new ABHashtable();
    }
    createHashMap() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new ABHashMap();
    }
}
StdUtil.instance = new StdUtil();
