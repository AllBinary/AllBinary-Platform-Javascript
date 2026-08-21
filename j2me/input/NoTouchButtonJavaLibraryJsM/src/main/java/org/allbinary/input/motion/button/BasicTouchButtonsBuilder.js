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
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
import { BasicArrayListUtil } from '../../../../../org/allbinary/util/BasicArrayListUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseTouchInput } from './BaseTouchInput.js';
export class BasicTouchButtonsBuilder extends BaseTouchInput {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicTouchButtonsBuilder.SINGLETON;
    }
    getList() {
        try {
            this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.GET_LIST);
            var list = new BasicArrayListD();
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return list;
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.GET_LIST, e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return BasicArrayListUtil.getInstance().getImmutableInstance();
            ;
        }
    }
}
BasicTouchButtonsBuilder.SINGLETON = new BasicTouchButtonsBuilder();
