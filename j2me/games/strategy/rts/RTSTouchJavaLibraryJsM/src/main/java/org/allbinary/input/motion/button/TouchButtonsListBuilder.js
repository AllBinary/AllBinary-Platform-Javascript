/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2007 AllBinary
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
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseTouchInput } from './BaseTouchInput.js';
//not GWT import const BaseTouchInput = globalThis.org.allbinary.input.motion.button.BaseTouchInput;
export class TouchButtonsListBuilder extends BaseTouchInput {
    constructor() {
        super(...arguments);
        this.baseTouchInputList = new BasicArrayListD();
    }
    addList(list) {
        var size = this.baseTouchInputList.size();
        ;
        var baseTouchInput;
        ;
        for (var index = 0; index < size; index++) {
            baseTouchInput = this.baseTouchInputList.get(index);
            list.addAllList(baseTouchInput.getList());
        }
    }
    add(baseTouchInput) {
        this.baseTouchInputList.add(baseTouchInput);
    }
}
