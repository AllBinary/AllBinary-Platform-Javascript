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
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseTouchInput } from './BaseTouchInput.js';
//sameFolderImports - not GWT import - same folder const BaseTouchInput
import { CommonButtons } from './CommonButtons.js';
//sameFolderImports - not GWT import - same folder const CommonButtons
import { TouchButtonLocationHelper } from './TouchButtonLocationHelper.js';
//sameFolderImports - not GWT import - same folder const TouchButtonLocationHelper
import { BasicTouchButtonCellPositionFactory } from './BasicTouchButtonCellPositionFactory.js';
//sameFolderImports - not GWT import - same folder const BasicTouchButtonCellPositionFactory
import { TouchButton } from './TouchButton.js';
//sameFolderImports - not GWT import - same folder const TouchButton
import { BasicTouchInputFactory } from './BasicTouchInputFactory.js';
//sameFolderImports - not GWT import - same folder const BasicTouchInputFactory
import { TouchButtonUpResource } from './TouchButtonUpResource.js';
//sameFolderImports - not GWT import - same folder const TouchButtonUpResource
import { TouchButtonDownResource } from './TouchButtonDownResource.js';
//sameFolderImports - not GWT import - same folder const TouchButtonDownResource
import { TouchButtonTurnLeftResource } from './TouchButtonTurnLeftResource.js';
//sameFolderImports - not GWT import - same folder const TouchButtonTurnLeftResource
import { TouchButtonTurnRightResource } from './TouchButtonTurnRightResource.js';
//sameFolderImports - not GWT import - same folder const TouchButtonTurnRightResource
export class BasicTouchButtonsBuilder extends BaseTouchInput {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
    }
    getList() {
        try {
            this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CONSTRUCTOR);
            let list = new BasicArrayListD();
            ;
            let commonButtons = CommonButtons.getInstance();
            ;
            let touchButtonLocationHelper = new TouchButtonLocationHelper();
            ;
            let basicTouchButtonCellPositionFactory = new BasicTouchButtonCellPositionFactory();
            ;
            let UP = TouchButton.createButton(BasicTouchInputFactory.getInstance().UP, TouchButtonUpResource.getInstance(), commonButtons.NORMAL_BUTTON, basicTouchButtonCellPositionFactory.SECOND_FROM_BOTTOM_LEFT, touchButtonLocationHelper.getColumnsRemainderHalf(), touchButtonLocationHelper.getRowsRemainderHalf());
            ;
            let DOWN = TouchButton.createButton(BasicTouchInputFactory.getInstance().DOWN, TouchButtonDownResource.getInstance(), commonButtons.NORMAL_BUTTON, basicTouchButtonCellPositionFactory.BOTTOM_LEFT, touchButtonLocationHelper.getColumnsRemainderHalf(), touchButtonLocationHelper.getRowsRemainderHalf());
            ;
            let LEFT = TouchButton.createButton(BasicTouchInputFactory.getInstance().SPECIAL_BUTTON_FOUR, TouchButtonTurnLeftResource.getInstance(), commonButtons.NORMAL_BUTTON, basicTouchButtonCellPositionFactory.BOTTOM_SECOND_FROM_RIGHT, touchButtonLocationHelper.getColumnsRemainderHalf(), touchButtonLocationHelper.getRowsRemainderHalf());
            ;
            let RIGHT = TouchButton.createButton(BasicTouchInputFactory.getInstance().SPECIAL_BUTTON_THREE, TouchButtonTurnRightResource.getInstance(), commonButtons.NORMAL_BUTTON, basicTouchButtonCellPositionFactory.BOTTOM_RIGHT, touchButtonLocationHelper.getColumnsRemainderHalf(), touchButtonLocationHelper.getRowsRemainderHalf());
            ;
            list.add(UP);
            list.add(LEFT);
            list.add(RIGHT);
            list.add(DOWN);
            //if statement needs to be on the same line and ternary does not work the same way.
            return list;
        }
        catch (caught) {
            {
                const e = caught;
                this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.GET_LIST, e);
                //if statement needs to be on the same line and ternary does not work the same way.
                return BasicArrayListUtil.getInstance().getImmutableInstance();
                ;
            }
        }
    }
}
