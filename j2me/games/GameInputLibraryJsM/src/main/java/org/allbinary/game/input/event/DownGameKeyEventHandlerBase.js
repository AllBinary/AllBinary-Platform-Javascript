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
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
import { BasicEventHandler } from '../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
export class DownGameKeyEventHandlerBase extends BasicEventHandler {
    constructor() {
        super();
        this.list = new BasicArrayListD();
    }
    addListener(playerGameInput) {
        if (!this.list.contains(playerGameInput)) {
            this.list.add(playerGameInput);
        }
    }
    removeAllListeners() {
        this.list.clear();
        super.removeAllListeners();
    }
    removeListenerSingleThreaded(eventListenerInterface) {
        this.list.remove(eventListenerInterface);
        super.removeListenerSingleThreaded(eventListenerInterface);
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
                var playerGameInput = this.list.objectArray[index];
                ;
                playerGameInput.onDownGameKeyEvent(eventObject);
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
        var downGameKeyEventListenerInterface = eventListenerInterface;
        ;
        downGameKeyEventListenerInterface.onDownGameKeyEvent(eventObject);
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(super.toString());
        stringBuffer.append(DownGameKeyEventHandlerBase.TOTAL_LISTENERS);
        stringBuffer.appendint(this.list.size());
        var eventListenerInterface;
        ;
        var size = this.list.size();
        ;
        var index = 0;
        ;
        while (index < size) {
            try {
                eventListenerInterface = this.list.get(index);
                stringBuffer.append(DownGameKeyEventHandlerBase.LISTENER_LABEL);
                stringBuffer.append(eventListenerInterface.toString());
                //: 
            }
            catch (e) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.TOSTRING, e);
            }
            index++;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
DownGameKeyEventHandlerBase.TOTAL_LISTENERS = " Total PlayerGameInput Listeners: ";
DownGameKeyEventHandlerBase.LISTENER_LABEL = " PlayerGameInput Listener: ";
