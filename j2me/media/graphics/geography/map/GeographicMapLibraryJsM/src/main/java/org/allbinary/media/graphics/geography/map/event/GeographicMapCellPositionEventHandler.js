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
//not plain js import { BasicArrayList } from '../../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;
import { EventStrings } from '../../../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;
import { BasicEventHandler } from '../../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
//not GWT import const GeographicMapCellPositionEventListenerInterface = globalThis.org.allbinary.media.graphics.geography.map.event.GeographicMapCellPositionEventListenerInterface;
export class GeographicMapCellPositionEventHandler extends BasicEventHandler {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GeographicMapCellPositionEventHandler.instance;
    }
    constructor() {
        super();
        this.list = new BasicArrayListD();
    }
    addListener(miniMapLayer) {
        if (!this.list.contains(miniMapLayer)) {
            this.list.add(miniMapLayer);
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
                var miniMapLayer = this.list.get(index);
                ;
                miniMapLayer.onGeographicMapCellPositionEvent(eventObject);
                //: 
            }
            catch (e) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, EventStrings.getInstance().FIRE_EVENT, e);
            }
        }
        super.fireEvent(eventObject);
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    fireRemoveEvent(eventObject) {
        var list = this.eventListenerInterfaceList;
        ;
        for (var index = this.list.size(); --index >= 0;) {
            try {
                var miniMapLayer = this.list.get(index);
                ;
                miniMapLayer.onRemoveGeographicMapCellPositionEvent(eventObject);
                //: 
            }
            catch (e) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, EventStrings.getInstance().FIRE_EVENT, e);
            }
        }
        var eventListenerInterface;
        ;
        var geographicMapCellPositionEventListenerInterface;
        ;
        var size = list.size();
        ;
        for (var index = 0; index < size; index++) {
            try {
                eventListenerInterface = list.get(index);
                geographicMapCellPositionEventListenerInterface = eventListenerInterface;
                geographicMapCellPositionEventListenerInterface.onRemoveGeographicMapCellPositionEvent(eventObject);
                //: 
            }
            catch (e) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, EventStrings.getInstance().FIRE_EVENT, e);
            }
        }
    }
    //@Throws(Exception.constructor)
    process(eventObject, eventListenerInterface) {
        var geographicMapCellPositionEventListenerInterface = eventListenerInterface;
        ;
        geographicMapCellPositionEventListenerInterface.onGeographicMapCellPositionEvent(eventObject);
    }
}
GeographicMapCellPositionEventHandler.instance = new GeographicMapCellPositionEventHandler();
