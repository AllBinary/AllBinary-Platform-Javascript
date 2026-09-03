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
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { BasicArrayListUtil } from '../../../../../org/allbinary/util/BasicArrayListUtil.js';
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseTouchInput } from './BaseTouchInput.js';
//not GWT import const BaseTouchInput = globalThis.org.allbinary.input.motion.button.BaseTouchInput;
import { CommonButtons } from './CommonButtons.js';
//not GWT import const CommonButtons = globalThis.org.allbinary.input.motion.button.CommonButtons;
import { TouchButtonLocationHelper } from './TouchButtonLocationHelper.js';
//not GWT import const TouchButtonLocationHelper = globalThis.org.allbinary.input.motion.button.TouchButtonLocationHelper;
import { BasicTouchButtonCellPositionFactory } from './BasicTouchButtonCellPositionFactory.js';
//not GWT import const BasicTouchButtonCellPositionFactory = globalThis.org.allbinary.input.motion.button.BasicTouchButtonCellPositionFactory;
import { TouchButton } from './TouchButton.js';
//not GWT import const TouchButton = globalThis.org.allbinary.input.motion.button.TouchButton;
import { BasicTouchInputFactory } from './BasicTouchInputFactory.js';
//not GWT import const BasicTouchInputFactory = globalThis.org.allbinary.input.motion.button.BasicTouchInputFactory;
import { TouchButtonUpResource } from './TouchButtonUpResource.js';
//not GWT import const TouchButtonUpResource = globalThis.org.allbinary.input.motion.button.TouchButtonUpResource;
import { TouchButtonDownResource } from './TouchButtonDownResource.js';
//not GWT import const TouchButtonDownResource = globalThis.org.allbinary.input.motion.button.TouchButtonDownResource;
import { TouchButtonTurnLeftResource } from './TouchButtonTurnLeftResource.js';
//not GWT import const TouchButtonTurnLeftResource = globalThis.org.allbinary.input.motion.button.TouchButtonTurnLeftResource;
import { TouchButtonTurnRightResource } from './TouchButtonTurnRightResource.js';
//not GWT import const TouchButtonTurnRightResource = globalThis.org.allbinary.input.motion.button.TouchButtonTurnRightResource;
export class BasicTouchButtonsBuilder extends BaseTouchInput {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
    }
    getList() {
        try {
            this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CONSTRUCTOR);
            var list = new BasicArrayListD();
            ;
            var commonButtons = CommonButtons.getInstance();
            ;
            var touchButtonLocationHelper = new TouchButtonLocationHelper();
            ;
            var basicTouchButtonCellPositionFactory = new BasicTouchButtonCellPositionFactory();
            ;
            var UP = TouchButton.createButton(BasicTouchInputFactory.getInstance().UP, TouchButtonUpResource.getInstance(), commonButtons.NORMAL_BUTTON, basicTouchButtonCellPositionFactory.SECOND_FROM_BOTTOM_LEFT, touchButtonLocationHelper.getColumnsRemainderHalf(), touchButtonLocationHelper.getRowsRemainderHalf());
            ;
            var DOWN = TouchButton.createButton(BasicTouchInputFactory.getInstance().DOWN, TouchButtonDownResource.getInstance(), commonButtons.NORMAL_BUTTON, basicTouchButtonCellPositionFactory.BOTTOM_LEFT, touchButtonLocationHelper.getColumnsRemainderHalf(), touchButtonLocationHelper.getRowsRemainderHalf());
            ;
            var LEFT = TouchButton.createButton(BasicTouchInputFactory.getInstance().SPECIAL_BUTTON_FOUR, TouchButtonTurnLeftResource.getInstance(), commonButtons.NORMAL_BUTTON, basicTouchButtonCellPositionFactory.BOTTOM_SECOND_FROM_RIGHT, touchButtonLocationHelper.getColumnsRemainderHalf(), touchButtonLocationHelper.getRowsRemainderHalf());
            ;
            var RIGHT = TouchButton.createButton(BasicTouchInputFactory.getInstance().SPECIAL_BUTTON_THREE, TouchButtonTurnRightResource.getInstance(), commonButtons.NORMAL_BUTTON, basicTouchButtonCellPositionFactory.BOTTOM_RIGHT, touchButtonLocationHelper.getColumnsRemainderHalf(), touchButtonLocationHelper.getRowsRemainderHalf());
            ;
            list.add(UP);
            list.add(LEFT);
            list.add(RIGHT);
            list.add(DOWN);
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
