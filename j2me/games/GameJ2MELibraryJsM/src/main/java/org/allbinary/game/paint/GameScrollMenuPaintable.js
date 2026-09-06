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
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { ColorChangeEventHandler } from '../../../../org/allbinary/graphics/color/ColorChangeEventHandler.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicGameDemoPaintable } from './BasicGameDemoPaintable.js';
//not GWT import - same folder const MainGameDemoStatePaintable = globalThis.org.allbinary.game.paint.MainGameDemoStatePaintable;
export class GameScrollMenuPaintable extends BasicGameDemoPaintable {
    constructor(mainDemoStatePaintable, ownershipPaintable, helpPaintableInterface, basicColor) {
        super(mainDemoStatePaintable, ownershipPaintable, helpPaintableInterface);
        //For kotlin this is before the body of the constructor.
        this.setColor(basicColor);
        ColorChangeEventHandler.getInstance().addListenerInterface(this);
    }
    setState(state) {
        this.setCurrentStatePaintable(this.getMainDemoStatePaintable());
    }
    onEvent(eventObject) {
    }
    setColor(basicColor) {
        var mainGameDemoStatePaintable = this.getMainDemoStatePaintable();
        ;
        var formPaintable = mainGameDemoStatePaintable.getMenuPaintableInterface();
        ;
        var scrollSelectionForm = formPaintable.getForm();
        ;
        mainGameDemoStatePaintable.getOwnershipPaintableInterface().setBasicColorP(basicColor);
        scrollSelectionForm.setButtonBasicColor(basicColor);
        var item;
        ;
        var stringComponent;
        ;
        for (var index = scrollSelectionForm.size() - 1; index >= 0; index--) {
            item = scrollSelectionForm.get(index);
            stringComponent = item.getLabelStringComponent();
            if (stringComponent !=
                null) {
                stringComponent.setForegroundBasicColor(basicColor);
            }
        }
    }
}
