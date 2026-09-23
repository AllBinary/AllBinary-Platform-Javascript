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
import { RuntimeException } from '../../../../../../java/lang/RuntimeException.js';
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import - same folder const GeographicMapCellType
export class GeographicMapCellTypeFactory extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.geographicMapCellTypeArray = new Array(512);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GeographicMapCellTypeFactory.instance;
    }
    get(type) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.geographicMapCellTypeArray[type];
    }
    getGeographicMapCellTypeArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.geographicMapCellTypeArray;
    }
    getStartType() {
        throw new RuntimeException();
    }
    getEndType() {
        throw new RuntimeException();
    }
    getEmptyType() {
        throw new RuntimeException();
    }
    isPath(cellType) {
        throw new RuntimeException();
    }
}
GeographicMapCellTypeFactory.instance = new GeographicMapCellTypeFactory();
