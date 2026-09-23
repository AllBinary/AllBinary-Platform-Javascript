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
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not GWT import const VisitorInterface
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BooleanFileVisitor extends Object {
    constructor(filterStringBasicArrayList) {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.setFilterStringBasicArrayList(filterStringBasicArrayList);
        PreLogUtil.put("Filter BasicArrayList: " + this.getFilterStringBasicArrayList().toString(), this, this.commonStrings.CONSTRUCTOR);
    }
    visit(anyType = {}) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.visit(anyType);
    }
    visit(file) {
        var list = this.getFilterStringBasicArrayList();
        ;
        var size = list.size();
        ;
        var nextFileFilterString;
        ;
        for (var index = 0; index < size; index++) {
            nextFileFilterString = list.get(index);
            if (this.visit(file, nextFileFilterString).valueOf()) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return Boolean.TRUE;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return Boolean.FALSE;
    }
    getFilterStringBasicArrayList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.filterStringBasicArrayList;
    }
    setFilterStringBasicArrayList(filterStringBasicArrayList) {
        this.filterStringBasicArrayList = filterStringBasicArrayList;
    }
    visit(file, fileNameString) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Boolean.FALSE;
    }
}
