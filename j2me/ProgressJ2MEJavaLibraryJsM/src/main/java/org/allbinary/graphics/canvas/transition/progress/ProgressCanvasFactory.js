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
import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
import { NullPaintable } from '../../../../../../org/allbinary/graphics/paint/NullPaintable.js';
import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ProgressCanvas } from './ProgressCanvas.js';
export class ProgressCanvasFactory extends Object {
    static getInstance() {
        if (ProgressCanvasFactory.PROGRESS_FORM_SCREEN == NullUtil.getInstance().NULL_OBJECT) {
            ProgressCanvasFactory.PROGRESS_FORM_SCREEN = new ProgressCanvas(StringUtil.getInstance().EMPTY_STRING, BasicColorFactory.getInstance().BLACK, BasicColorFactory.getInstance().WHITE);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return ProgressCanvasFactory.PROGRESS_FORM_SCREEN;
    }
    static getLazyInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullPaintable.getInstance();
        ;
    }
}
ProgressCanvasFactory.PROGRESS_FORM_SCREEN = NullUtil.getInstance().NULL_OBJECT;
