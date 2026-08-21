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
import { Hashtable } from '../../../../java/util/Hashtable.js';
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
import { BasicArrayListUtil } from '../../../../org/allbinary/util/BasicArrayListUtil.js';
export class ResourceRelativeRelationshipFactory extends Object {
    constructor() {
        super(...arguments);
        this.basicArrayListUtil = BasicArrayListUtil.getInstance();
        this.hashtable = new Hashtable();
        this.initialized = false;
    }
    //@Throws(Exception.constructor)
    init(level) {
        this.setInitialized(true);
    }
    //@Throws(Exception.constructor)
    getResourceRelativeRelationshipList(resource) {
        var listCanBeNull = this.hashtable.get(resource);
        ;
        if (listCanBeNull ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.basicArrayListUtil.getImmutableInstance();
            ;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return listCanBeNull;
    }
    //@Throws(Exception.constructor)
    addResourceRelativeRelationship(resource, hardPoint) {
        var list = this.getResourceRelativeRelationshipList(resource);
        ;
        if (list == this.basicArrayListUtil.getImmutableInstance()) {
            list = new BasicArrayListD();
        }
        list.add(hardPoint);
        this.hashtable.put(resource, list);
    }
    isLoadingLevel(level) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isFeature() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    setInitialized(initialized) {
        this.initialized = initialized;
    }
    isInitialized() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.initialized;
    }
}
