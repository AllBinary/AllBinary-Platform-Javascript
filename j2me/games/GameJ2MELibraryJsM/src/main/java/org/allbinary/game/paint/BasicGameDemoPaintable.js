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
//not GWT import const Graphics
import { NullPaintable } from '../../../../org/allbinary/graphics/paint/NullPaintable.js';
//not GWT import const Paintable
import { StatePaintable } from '../../../../org/allbinary/graphics/paint/StatePaintable.js';
//not GWT import const StatePaintable
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BasicGameDemoPaintable extends StatePaintable {
    constructor(mainDemoStatePaintable, ownershipPaintable, helpPaintableInterface) {
        super();
        this.currentStatePaintable = NullPaintable.getInstance();
        this.mainDemoStatePaintable = mainDemoStatePaintable;
        this.setCurrentStatePaintable(NullPaintable.getInstance());
        this.ownershipPaintable = ownershipPaintable;
        this.helpPaintableInterface = helpPaintableInterface;
    }
    setState(state) {
        if (state == 0) {
            this.setCurrentStatePaintable(this.getMainDemoStatePaintable());
        }
        else if (state == 1) {
            this.setCurrentStatePaintable(this.helpPaintableInterface);
        }
        else {
            this.setCurrentStatePaintable(this.ownershipPaintable);
        }
    }
    paint(graphics) {
        this.getCurrentStatePaintable().paint(graphics);
    }
    getHelpPaintableInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.helpPaintableInterface;
    }
    setCurrentStatePaintable(currentStatePaintable) {
        this.currentStatePaintable = currentStatePaintable;
    }
    getCurrentStatePaintable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.currentStatePaintable;
    }
    getMainDemoStatePaintable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.mainDemoStatePaintable;
    }
}
