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
import { Object } from '../../../../java/lang/Object.js';
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;
import { TouchFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/TouchFeatureFactory.js';
//not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ScrollSelectionFormNoneFactory } from './ScrollSelectionFormNoneFactory.js';
//not GWT import - same folder const ScrollSelectionFormNoneFactory = globalThis.org.allbinary.graphics.form.ScrollSelectionFormNoneFactory;
import { CommandCurrentSelectionForm } from './CommandCurrentSelectionForm.js';
//not GWT import - same folder const FormType = globalThis.org.allbinary.graphics.form.FormType;
export class CommandCurrentSelectionFormFactory extends Object {
    //@Throws(Exception.constructor)
    static getInstance(title, items, rectangle, formType, border, moveForSmallScreen, backgroundBasicColor, foregroundBasicColor) {
        if (Features.getInstance().isFeature(TouchFeatureFactory.getInstance().TOUCH_ENABLED)) {
            var scrollSelectionForm = new CommandCurrentSelectionForm(title, items, border, moveForSmallScreen, backgroundBasicColor, foregroundBasicColor);
            ;
            scrollSelectionForm.init(rectangle, formType);
            //if statement needs to be on the same line and ternary does not work the same way.
            return scrollSelectionForm;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return ScrollSelectionFormNoneFactory.getInstance();
            ;
        }
    }
}
