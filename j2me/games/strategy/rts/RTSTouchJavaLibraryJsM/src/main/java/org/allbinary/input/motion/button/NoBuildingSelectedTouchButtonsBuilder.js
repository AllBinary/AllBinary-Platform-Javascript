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
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { BasicArrayListUtil } from '../../../../../org/allbinary/util/BasicArrayListUtil.js';
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseTouchInput } from './BaseTouchInput.js';
//not GWT import const BaseTouchInput = globalThis.org.allbinary.input.motion.button.BaseTouchInput;
import { BasicTouchButtonsBuilder } from './BasicTouchButtonsBuilder.js';
//not GWT import const BasicTouchButtonsBuilder = globalThis.org.allbinary.input.motion.button.BasicTouchButtonsBuilder;
import { BuildingScrollTouchButtonsBuilder } from './BuildingScrollTouchButtonsBuilder.js';
//not GWT import const BuildingScrollTouchButtonsBuilder = globalThis.org.allbinary.input.motion.button.BuildingScrollTouchButtonsBuilder;
export class NoBuildingSelectedTouchButtonsBuilder extends BaseTouchInput {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
    }
    getList() {
        try {
            this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CONSTRUCTOR);
            var list = new BasicArrayListD();
            ;
            list.addAllList(new BasicTouchButtonsBuilder().getList());
            list.addAllList(new BuildingScrollTouchButtonsBuilder().getList());
            //if statement needs to be on the same line and ternary does not work the same way.
            return list;
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.CONSTRUCTOR, e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return BasicArrayListUtil.getInstance().getImmutableInstance();
            ;
        }
    }
}
