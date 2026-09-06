/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
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
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CanvasStrings extends Object {
    constructor() {
        super(...arguments);
        this.CONSTRUCTOR = "MyCanvas::MyCanvas";
        this.PAUSE = "MyCanvas::pause";
        this.UN_PAUSE = "MyCanvas::unPause";
        this.SET_FULL_SCREEN_MODE = "setFullScreenMode";
        this.SIZE_CHANGED = "sizeChanged";
        this.SCALED_IMAGES = "scaledImages";
        this.PAINT = "paint";
        this.ON_DISPLAY_CHANGE_EVENT = "onDisplayChangeEvent";
        this.UPDATE_MEASUREMENT = "updateMeasurement";
        this.FD_WIDTH = " font/display width: ";
        this.FD_HEIGHT = " font/display height: ";
        this.EMPTY_CHILD_NAME_LIST = BasicArrayListUtil.getInstance().getImmutableInstance();
        this.ABOUT = "About";
        this.OPTIONS = "Options";
        this.FONT_ATLAS = "/font.png";
        this.OBJ_MODEL = "_obj";
        this.MD2_MODEL = "_md2";
        this._PNG = ".png";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CanvasStrings.instance;
    }
}
CanvasStrings.instance = new CanvasStrings();
