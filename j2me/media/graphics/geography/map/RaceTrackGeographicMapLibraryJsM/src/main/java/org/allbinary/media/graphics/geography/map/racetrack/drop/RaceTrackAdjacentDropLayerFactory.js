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
import { Object } from '../../../../../../../../java/lang/Object.js';
//not plain js import { BasicArrayList } from '../../../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { BasicArrayListUtil } from '../../../../../../../../org/allbinary/util/BasicArrayListUtil.js';
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//not GWT import const LayerInterfaceFactoryInterface = globalThis.org.allbinary.layer.LayerInterfaceFactoryInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class RaceTrackAdjacentDropLayerFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return RaceTrackAdjacentDropLayerFactory.DROP_LAYER_FACTORY;
    }
    constructor() {
        super();
        this.list = new BasicArrayListD();
        this.basicArrayListUtil = BasicArrayListUtil.getInstance();
    }
    clear() {
        this.list.clear();
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list.size();
        ;
    }
    getRandomInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicArrayListUtil.getRandom(this.list);
    }
    add(layerInterfaceFactoryInterface) {
        this.list.add(layerInterfaceFactoryInterface);
    }
}
RaceTrackAdjacentDropLayerFactory.DROP_LAYER_FACTORY = new RaceTrackAdjacentDropLayerFactory();
