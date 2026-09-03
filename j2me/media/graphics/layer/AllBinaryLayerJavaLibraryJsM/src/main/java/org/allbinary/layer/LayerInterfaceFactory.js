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
import { Object } from '../../../java/lang/Object.js';
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } from '../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { BasicArrayListUtil } from '../../../org/allbinary/util/BasicArrayListUtil.js';
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Layer } from './Layer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
export class LayerInterfaceFactory extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.list = BasicArrayListUtil.getInstance().getImmutableInstance();
        this.HASHTABLE_LABEL = "Hashtable: ";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LayerInterfaceFactory.SINGLETON;
    }
    init() {
        this.list = new BasicArrayListD();
    }
    //@Throws(Exception.constructor)
    getNexInstance(hashtable, x, y, z) {
        var commonStrings = CommonStrings.getInstance();
        ;
        this.logUtil.putF(new StringMaker().append(this.HASHTABLE_LABEL).append(StringUtil.getInstance().toString(hashtable)).toString(), this, commonStrings.GET_INSTANCE);
        var typeInteger = hashtable.get(Layer.ID);
        ;
        var layerInterfaceFactoryInterface = this.list.objectArray[typeInteger.intValue() - 1];
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return layerInterfaceFactoryInterface.getNextInstance(hashtable, x, y, z);
        ;
    }
    add(layerInterfaceFactoryInterface) {
        this.list.add(layerInterfaceFactoryInterface);
    }
}
LayerInterfaceFactory.SINGLETON = new LayerInterfaceFactory();
