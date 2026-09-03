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
import { Object } from '../../../../../../java/lang/Object.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;
import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const BasicEventHandlerInterface = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandlerInterface;
export class BasicEventHandler extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.eventStrings = EventStrings.getInstance();
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
            this.addListenerInterface(eventListenerInterface);
        }
    }
    removeListeners(vector) {
        var eventListenerInterface;
        ;
        var size = vector.size();
        ;
        for (var index = 0; index < size; index++) {
            eventListenerInterface = vector.get(index);
            this.removeListener(eventListenerInterface);
        }
    }
    addListenerSingleThreaded(eventListenerInterface) {
        if (!this.eventListenerInterfaceList.contains(eventListenerInterface)) {
            this.eventListenerInterfaceList.add(eventListenerInterface);
        }
    }
    addListenerInterface(eventListenerInterface) {
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
    fireEvent(eventObject) {
        var eventListenerInterface;
        ;
        var index = 0;
        ;
        while (index < this.eventListenerInterfaceList.size()) {
            try {
                eventListenerInterface = this.eventListenerInterfaceList.get(index);
                this.process(eventObject, eventListenerInterface);
                //: 
            }
            catch (e) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, this.eventStrings.FIRE_EVENT, e);
            }
            index++;
        }
    }
    //@Throws(Exception.constructor)
    process(eventObject, eventListenerInterface) {
        eventListenerInterface.onEvent(eventObject);
    }
    getEventListenerInterfaceListP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.eventListenerInterfaceList;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(this.eventStrings.TOTAL_LISTENERS);
        stringBuffer.appendint(this.eventListenerInterfaceList.size());
        var eventListenerInterface;
        ;
        var index = 0;
        ;
        while (index < this.eventListenerInterfaceList.size()) {
            try {
                eventListenerInterface = this.eventListenerInterfaceList.get(index);
                stringBuffer.append(this.eventStrings.LISTENER_LABEL);
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
