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
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//not GWT import - same folder const WeaponLayer
export class WeaponLayerArrayLayerCircularStaticPool extends Object {
    constructor() {
        super(...arguments);
        this.MAX = 5;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.MAX);
        this.ALL_WEAPONLAYER_ARRAY = new Array(4);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return WeaponLayerArrayLayerCircularStaticPool.instance;
    }
    init() {
        var WEAPONLAYER_ARRAY = new Array(this.MAX * 2);
        ;
        var TWO_WEAPONLAYER_ARRAY = new Array(this.MAX);
        ;
        var THREE_WEAPONLAYER_ARRAY = new Array(this.MAX);
        ;
        for (var index = 0; index < this.MAX; index++) {
            WEAPONLAYER_ARRAY[index] = new Array(1);
            TWO_WEAPONLAYER_ARRAY[index] = new Array(2);
            THREE_WEAPONLAYER_ARRAY[index] = new Array(3);
        }
        this.ALL_WEAPONLAYER_ARRAY[1] = WEAPONLAYER_ARRAY;
        this.ALL_WEAPONLAYER_ARRAY[2] = TWO_WEAPONLAYER_ARRAY;
        this.ALL_WEAPONLAYER_ARRAY[3] = THREE_WEAPONLAYER_ARRAY;
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    getInstanceArray(size) {
        var weaponLayerArray = this.ALL_WEAPONLAYER_ARRAY[size][this.circularIndexUtil.getIndex()];
        ;
        this.circularIndexUtil.next();
        //if statement needs to be on the same line and ternary does not work the same way.
        return weaponLayerArray;
    }
}
WeaponLayerArrayLayerCircularStaticPool.instance = new WeaponLayerArrayLayerCircularStaticPool();
