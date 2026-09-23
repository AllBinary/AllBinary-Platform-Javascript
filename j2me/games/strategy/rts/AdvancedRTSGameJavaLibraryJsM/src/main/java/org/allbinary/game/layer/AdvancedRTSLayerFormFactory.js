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
import { RTSLayerFormFactory } from '../../../../org/allbinary/game/input/RTSLayerFormFactory.js';
//not GWT import const ABCustomItem
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { ScrollSelectionForm } from '../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
//not GWT import const ItemArraySingletonFactoryInterface
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RTSScrollSelectionFormFactory } from './RTSScrollSelectionFormFactory.js';
//not GWT import - same folder const RTSLayer
export class AdvancedRTSLayerFormFactory extends RTSLayerFormFactory {
    constructor(label, itemArrayFactoryInterface) {
        super();
        this.logUtil = LogUtil.getInstance();
        var scrollSelectionForm = ScrollSelectionForm.getNullScrollSelectionForm();
        ;
        try {
            var items = itemArrayFactoryInterface.getItems();
            ;
            scrollSelectionForm = RTSScrollSelectionFormFactory.getInstance(label, items);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.CONSTRUCTOR, e);
        }
        this.scrollSelectionForm = scrollSelectionForm;
    }
    getInstance(rtsLayer) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.scrollSelectionForm;
    }
}
