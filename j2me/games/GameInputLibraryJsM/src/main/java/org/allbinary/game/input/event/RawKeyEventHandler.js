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
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
export class RawKeyEventHandler extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return RawKeyEventHandler.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.eventListenerInterfaceList = new BasicArrayListD();
    }
    removeAllListeners() {
        this.eventListenerInterfaceList = new BasicArrayListD();
    }
    addListeners(vector) {
        var eventListenerInterface;
        ;
        var size = vector.size();
        ;
        for (var index = 0; index < size; index++) {
            eventListenerInterface = vector.get(index);
            this.addListener(eventListenerInterface);
        }
    }
    addListenerSingleThreaded(eventListenerInterface) {
        if (!this.eventListenerInterfaceList.contains(eventListenerInterface)) {
            this.eventListenerInterfaceList.add(eventListenerInterface);
        }
    }
    addListener(eventListenerInterface) {
        if (!this.eventListenerInterfaceList.contains(eventListenerInterface)) {
            this.eventListenerInterfaceList.add(eventListenerInterface);
        }
    }
    removeListenerSingleThreaded(eventListenerInterface) {
        this.eventListenerInterfaceList.remove(eventListenerInterface);
    }
    removeListener(eventListenerInterface) {
        this.eventListenerInterfaceList.remove(eventListenerInterface);
    }
    //@Throws(Exception.constructor)
    fireEvent(keyCode, deviceId, repeated) {
        var eventListenerInterface;
        ;
        var index = 0;
        ;
        while (index < this.eventListenerInterfaceList.size()) {
            try {
                eventListenerInterface = this.eventListenerInterfaceList.get(index);
                this.process(keyCode, deviceId, repeated, eventListenerInterface);
                //: 
            }
            catch (e) {
                var commonStrings = CommonStrings.getInstance();
                ;
                this.logUtil.put(commonStrings.EXCEPTION, this, EventStrings.getInstance().FIRE_EVENT, e);
            }
            index++;
        }
    }
    //@Throws(Exception.constructor)
    process(keyCode, deviceId, repeated, eventListenerInterface) {
        eventListenerInterface.onEventRaw(keyCode, deviceId, repeated);
    }
    getEventListenerInterfaceListP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.eventListenerInterfaceList;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(RawKeyEventHandler.TOTAL_LISTENERS);
        stringBuffer.appendint(this.eventListenerInterfaceList.size());
        var eventListenerInterface;
        ;
        var index = 0;
        ;
        while (index < this.eventListenerInterfaceList.size()) {
            try {
                eventListenerInterface = this.eventListenerInterfaceList.get(index);
                stringBuffer.append(RawKeyEventHandler.LISTENER_LABEL);
                stringBuffer.append(eventListenerInterface.toString());
                //: 
            }
            catch (e) {
                var commonStrings = CommonStrings.getInstance();
                ;
                this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.TOSTRING, e);
            }
            index++;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
RawKeyEventHandler.instance = new RawKeyEventHandler();
RawKeyEventHandler.TOTAL_LISTENERS = "Total Listeners: ";
RawKeyEventHandler.LISTENER_LABEL = " Listener: ";
