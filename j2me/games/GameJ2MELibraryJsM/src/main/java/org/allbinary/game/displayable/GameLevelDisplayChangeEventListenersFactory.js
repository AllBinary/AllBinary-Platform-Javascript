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
import { DisplayChangeEventHandler } from '../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js';
//not GWT import const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameLevelDisplayChangeEventListenersFactory extends Object {
    constructor() {
        super(...arguments);
        this.list = new BasicArrayListD();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameLevelDisplayChangeEventListenersFactory.instance;
    }
    add(displayChangeEventListener) {
        this.list.add(displayChangeEventListener);
        DisplayChangeEventHandler.getInstance().addListenerInterface(displayChangeEventListener);
    }
    clear() {
        var displayChangeEventHandler = DisplayChangeEventHandler.getInstance();
        ;
        var displayChangeEventListener;
        ;
        for (var index = this.list.size(); --index >= 0;) {
            displayChangeEventListener = this.list.objectArray[index];
            displayChangeEventHandler.removeListener(displayChangeEventListener);
        }
        this.list.clear();
    }
}
GameLevelDisplayChangeEventListenersFactory.instance = new GameLevelDisplayChangeEventListenersFactory();
