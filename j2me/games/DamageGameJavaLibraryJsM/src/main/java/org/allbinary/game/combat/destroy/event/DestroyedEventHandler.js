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
import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
import { BasicEventHandler } from '../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
export class DestroyedEventHandler extends BasicEventHandler {
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DestroyedEventHandler.instance;
    }
    constructor() {
        super();
        this.list = new BasicArrayListD();
    }
    addListener(collidableDestroyableDamageableLayer) {
        if (!this.list.contains(collidableDestroyableDamageableLayer)) {
            this.list.add(collidableDestroyableDamageableLayer);
        }
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    removeAllListeners() {
        this.list.clear();
        super.removeAllListeners();
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    removeListener(eventListenerInterface) {
        this.list.remove(eventListenerInterface);
        super.removeListener(eventListenerInterface);
    }
    //@Throws(Exception.constructor)
    fireEvent(eventObject) {
        for (var index = this.list.size(); --index >= 0;) {
            try {
                var collidableDestroyableDamageableLayer = this.list.objectArray[index];
                ;
                collidableDestroyableDamageableLayer.onDestroyed(eventObject);
                //: 
            }
            catch (e) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, EventStrings.getInstance().FIRE_EVENT, e);
            }
        }
        super.fireEvent(eventObject);
    }
    //@Throws(Exception.constructor)
    process(eventObject, eventListenerInterface) {
        var destroyedEventListenerInterface = eventListenerInterface;
        ;
        destroyedEventListenerInterface.onDestroyed(eventObject);
    }
}
DestroyedEventHandler.instance = new DestroyedEventHandler();
