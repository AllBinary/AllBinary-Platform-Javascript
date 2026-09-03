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
import { StdUtil } from '../../../../org/allbinary/logic/StdUtil.js';
//not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const GameConfiguration = globalThis.org.allbinary.game.configuration.GameConfiguration;
export class GameConfigurationSingleton extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameConfigurationSingleton.SINGLETON;
    }
    constructor() {
        super();
        this.list = new BasicArrayListD();
        this.hashtable = StdUtil.getInstance().createHashtable();
    }
    getInstanceByName(name) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hashtable.get(name);
    }
    getOptionsBasicArrayList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list;
    }
    add(gameConfiguration) {
        this.list.add(gameConfiguration);
    }
    getHashtable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hashtable;
    }
}
GameConfigurationSingleton.SINGLETON = new GameConfigurationSingleton();
