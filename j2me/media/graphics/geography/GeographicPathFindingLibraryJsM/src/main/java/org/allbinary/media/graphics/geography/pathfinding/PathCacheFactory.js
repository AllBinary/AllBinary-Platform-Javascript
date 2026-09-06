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
import { Object } from '../../../../../../java/lang/Object.js';
import { Exception } from '../../../../../../java/lang/Exception.js';
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PathCacheFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PathCacheFactory.pathFactory;
    }
    constructor() {
        super();
        this.basicArrayListUtil = BasicArrayListUtil.getInstance();
        this.hashtable = StdUtil.getInstance().createHashtable();
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hashtable.size();
        ;
    }
    add(pathId, list) {
        this.hashtable.put(pathId, list);
    }
    remove(pathId) {
        this.hashtable.remove(pathId);
    }
    //@Throws(Exception.constructor)
    removeAll() {
        this.hashtable.clear();
        if (this.hashtable.size() > 0) {
            throw new Exception("Did not clear");
        }
    }
    //@Throws(Exception.constructor)
    getOrCreate(pathIdInteger) {
        var listCanBeNull = this.hashtable.get(pathIdInteger);
        ;
        if (listCanBeNull ==
            null) {
            listCanBeNull = this.basicArrayListUtil.getImmutableInstance();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return listCanBeNull;
    }
}
PathCacheFactory.pathFactory = new PathCacheFactory();
