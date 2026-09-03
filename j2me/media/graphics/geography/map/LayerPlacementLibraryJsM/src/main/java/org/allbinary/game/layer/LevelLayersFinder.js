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
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
import { Layer } from '../../../../org/allbinary/layer/Layer.js';
//not GWT import const Layer = globalThis.org.allbinary.layer.Layer;
//not plain js import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { EnumerationUtil } from '../../../../org/allbinary/util/EnumerationUtil.js';
const EnumerationUtil = globalThis.org.allbinary.util.EnumerationUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class LevelLayersFinder extends Object {
    constructor() {
        super(...arguments);
        this.enumerationUtil = EnumerationUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LevelLayersFinder.instance;
    }
    get(hashtable) {
        var smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
        ;
        var list = new BasicArrayListD();
        ;
        var enumeration = hashtable.keys();
        ;
        var layerHashtableCanBeNull;
        ;
        var integerCanBeNull;
        ;
        var cachedIntegerCanBeNull;
        ;
        while (this.enumerationUtil.hasMoreElements(enumeration)) {
            layerHashtableCanBeNull = hashtable.get(this.enumerationUtil.nextElement(enumeration));
            integerCanBeNull = layerHashtableCanBeNull.get(Layer.ID);
            cachedIntegerCanBeNull = smallIntegerSingletonFactory.getAt(integerCanBeNull.intValue());
            if (!list.contains(cachedIntegerCanBeNull)) {
                list.add(cachedIntegerCanBeNull);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return list;
    }
}
LevelLayersFinder.instance = new LevelLayersFinder();
