/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
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
//not GWT import const ABCustomItem
import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory
import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton
import { FormTypeFactory } from '../../../../org/allbinary/graphics/form/FormTypeFactory.js';
//not GWT import const FormTypeFactory
import { MultipleScrollSelectionHorizontalForm } from '../../../../org/allbinary/graphics/form/MultipleScrollSelectionHorizontalForm.js';
//not GWT import const ScrollSelectionForm
import { CommonButtons } from '../../../../org/allbinary/input/motion/button/CommonButtons.js';
//not GWT import const CommonButtons
import { TouchButtonLocationHelper } from '../../../../org/allbinary/input/motion/button/TouchButtonLocationHelper.js';
//not GWT import const TouchButtonLocationHelper
//Current folder imports from return types, extended types, and scope (deduplicated)
export class RTSScrollSelectionFormFactory extends Object {
    //@Throws(Exception.constructor)
    static getInstance(formLabel, items) {
        var basicColorFactory = BasicColorFactory.getInstance();
        ;
        var touchButtonLocationHelper = new TouchButtonLocationHelper();
        ;
        var displayInfo = DisplayInfoSingleton.getInstance();
        ;
        var menuX = CommonButtons.getInstance().STANDARD_BUTTON_SIZE + touchButtonLocationHelper.getColumnsRemainderHalf();
        ;
        var width = displayInfo.getLastWidth() - (menuX * 2);
        ;
        var menuRectangle = new Rectangle(PointFactory.getInstance().createXY(menuX, 16), width, CommonButtons.getInstance().STANDARD_BUTTON_SIZE);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return MultipleScrollSelectionHorizontalForm.createForm(formLabel, items, menuRectangle, FormTypeFactory.getInstance().HORIZONTAL_FORM, 0, basicColorFactory.BLACK, basicColorFactory.WHITE);
        ;
    }
}
