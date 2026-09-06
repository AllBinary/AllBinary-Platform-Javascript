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
import { Object } from '../../../../../../../java/lang/Object.js';
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class RaceTracksPathPrinter extends Object {
    printPath(list) {
        var size = list.size();
        ;
        for (var index = 0; index < size; index++) {
            var anyType = list.get(index);
            ;
            PreLogUtil.put(new StringMaker().append("pathList.add(cellPositionFactory.getInstance").append(anyType.toString()).append(");").toString(), this, "printPath");
        }
    }
    printPaths(list) {
        var size = list.size();
        ;
        for (var index = 0; index < size; index++) {
            console.log(new StringMaker().append(" Path ").appendint(index).append(CommonLabels.getInstance().COLON_SEP).toString());
            this.printPath(list.get(index));
        }
    }
}
