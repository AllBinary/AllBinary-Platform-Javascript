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
//not GWT import const CountedPickedUpLayerInterfaceFactory = globalThis.org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactory;
import { CountedPickedUpLayerInterfaceFactoryPool } from '../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactoryPool.js';
//not GWT import const CountedPickedUpLayerInterfaceFactoryPool = globalThis.org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactoryPool;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { BasicArrayListUtil } from '../../../../org/allbinary/util/BasicArrayListUtil.js';
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CountedLayerInterfaceFactoryPart } from './CountedLayerInterfaceFactoryPart.js';
//not GWT import const PartInterface = globalThis.org.allbinary.game.part.PartInterface;
export class MakeCountedPartsSingletonArrayFactory extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.list = BasicArrayListUtil.getInstance().getImmutableInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MakeCountedPartsSingletonArrayFactory.instance;
    }
    //@Throws(Exception.constructor)
    getUpdated(partInterfaceArray) {
        this.list = new BasicArrayListD();
        for (var index = 0; index < partInterfaceArray.length; index++) {
            this.list.add(partInterfaceArray[index]);
        }
        var countedBasicArrayList = CountedPickedUpLayerInterfaceFactoryPool.getInstance().getList();
        ;
        var layerInterfaceFactoryInterface;
        ;
        var size = countedBasicArrayList.size();
        ;
        for (var index = 0; index < size; index++) {
            layerInterfaceFactoryInterface = countedBasicArrayList.objectArray[index];
            this.list.add(new CountedLayerInterfaceFactoryPart(0, layerInterfaceFactoryInterface));
        }
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("Total Parts: ");
        stringBuffer.appendint(this.list.size());
        stringBuffer.append(" Counted: ");
        stringBuffer.appendint(countedBasicArrayList.size());
        var commonStrings = CommonStrings.getInstance();
        ;
        this.logUtil.putF(stringBuffer.toString(), this, commonStrings.GET_INSTANCE);
        var newPartInterfaceArray = new Array(this.list.size());
        ;
        var newSize = newPartInterfaceArray.length;
        ;
        for (var index = 0; index < newSize; index++) {
            newPartInterfaceArray[index] = this.list.get(index);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return newPartInterfaceArray;
    }
}
MakeCountedPartsSingletonArrayFactory.instance = new MakeCountedPartsSingletonArrayFactory();
