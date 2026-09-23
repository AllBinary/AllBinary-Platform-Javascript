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
import { Object } from '../../../../../java/lang/Object.js';
import { AboutPaintable } from '../../../../../org/allbinary/game/paint/AboutPaintable.js';
//not GWT import const AboutPaintable
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
//not GWT import const Paintable
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AboutPaintableFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AboutPaintableFactory.instance;
    }
    constructor() {
        super();
        this.paintableArray = [
            NullPaintable.getInstance()
        ];
        var INFO = [
            "Built with the", "AllBinary Platform", StringUtil.getInstance().EMPTY_STRING, "Comments or Questions:", "support@allbinary.com"
        ];
        ;
        var DEVELOPERS = [
            "Developed By:", "Travis Berthelot"
        ];
        ;
        this.paintableArray = AboutPaintable.getInstance(INFO, DEVELOPERS).getPaintableArrayInstance();
    }
}
AboutPaintableFactory.instance = new AboutPaintableFactory();
