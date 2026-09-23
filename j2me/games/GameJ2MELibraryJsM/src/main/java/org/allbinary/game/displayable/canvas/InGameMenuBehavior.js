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
//not GWT import const DisplayChangeEvent
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseMenuBehavior } from './BaseMenuBehavior.js';
//not GWT import - same folder const AllBinaryGameCanvas
import { GameCanvasNonBotPaintable } from './GameCanvasNonBotPaintable.js';
//not GWT import - same folder const GameCanvasNonBotPaintable
export class InGameMenuBehavior extends BaseMenuBehavior {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return InGameMenuBehavior.instanceC;
    }
    //@Throws(Exception.constructor)
    onDisplayChangeEvent(allBinaryGameCanvas, displayChangeEvent) {
        allBinaryGameCanvas.updateMenuFromEvent(displayChangeEvent);
    }
    initSpecialPaint(allBinaryGameCanvas) {
        allBinaryGameCanvas.setNonBotPaintableP(new GameCanvasNonBotPaintable(allBinaryGameCanvas));
    }
    //@Throws(Exception.constructor)
    initMenu(allBinaryGameCanvas) {
        allBinaryGameCanvas.initMenu2();
    }
    //@Throws(Exception.constructor)
    updateMenu(allBinaryGameCanvas) {
        allBinaryGameCanvas.initMenu2();
    }
    //@Throws(Exception.constructor)
    popupMenu(allBinaryGameCanvas) {
        allBinaryGameCanvas.popupMenu2();
    }
    closeMenu(allBinaryGameCanvas) {
        allBinaryGameCanvas.closeMenu2();
    }
}
InGameMenuBehavior.instanceC = new InGameMenuBehavior();
