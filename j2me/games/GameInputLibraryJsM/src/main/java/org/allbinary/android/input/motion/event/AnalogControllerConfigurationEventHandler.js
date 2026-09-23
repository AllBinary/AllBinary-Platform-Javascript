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
//not GWT import const EventListenerInterface
import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings
import { BasicEventHandler } from '../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
//not GWT import const BasicEventHandler
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import - same folder const AnalogControllerConfigurationEvent
export class AnalogControllerConfigurationEventHandler extends BasicEventHandler {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AnalogControllerConfigurationEventHandler.instance;
    }
    constructor() {
        super();
        this.list = new BasicArrayListD();
    }
    addListener(analogControllerConfigurationEventListenerInterface) {
        if (!this.list.contains(analogControllerConfigurationEventListenerInterface)) {
            this.list.add(analogControllerConfigurationEventListenerInterface);
        }
    }
    removeAllListeners() {
        this.list.clear();
        super.removeAllListeners();
    }
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
                playerGameInput.onAnalogControllerConfigurationEvent(eventObject);
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
        var analogControllerConfigurationEventListenerInterface = eventListenerInterface;
        ;
        analogControllerConfigurationEventListenerInterface.onAnalogControllerConfigurationEvent(eventObject);
    }
}
AnalogControllerConfigurationEventHandler.instance = new AnalogControllerConfigurationEventHandler();
