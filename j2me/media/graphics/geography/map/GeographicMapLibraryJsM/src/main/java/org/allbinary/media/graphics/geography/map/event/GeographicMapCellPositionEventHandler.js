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
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const EventListenerInterface
import { EventStrings } from '../../../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings
import { BasicEventHandler } from '../../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
//sameFolderImports - not GWT import - same folder const GeographicMapCellPositionEventListenerInterface
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
        for (let index = this.list.size(); --index >= 0;) {
            try {
                let miniMapLayer = this.list.get(index);
                ;
                miniMapLayer.onGeographicMapCellPositionEvent(eventObject);
            }
            catch (caught) {
                {
                    const e = caught;
                    this.logUtil.put(this.commonStrings.EXCEPTION, this, EventStrings.getInstance().FIRE_EVENT, e);
                }
            }
        }
        super.fireEvent(eventObject);
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    fireRemoveEvent(eventObject) {
        let list = this.eventListenerInterfaceList;
        ;
        for (let index = this.list.size(); --index >= 0;) {
            try {
                let miniMapLayer = this.list.get(index);
                ;
                miniMapLayer.onRemoveGeographicMapCellPositionEvent(eventObject);
            }
            catch (caught) {
                {
                    const e = caught;
                    this.logUtil.put(this.commonStrings.EXCEPTION, this, EventStrings.getInstance().FIRE_EVENT, e);
                }
            }
        }
        let eventListenerInterface;
        ;
        let geographicMapCellPositionEventListenerInterface;
        ;
        let size = list.size();
        ;
        for (let index = 0; index < size; index++) {
            try {
                eventListenerInterface = list.get(index);
                geographicMapCellPositionEventListenerInterface = eventListenerInterface;
                geographicMapCellPositionEventListenerInterface.onRemoveGeographicMapCellPositionEvent(eventObject);
            }
            catch (caught) {
                {
                    const e = caught;
                    this.logUtil.put(this.commonStrings.EXCEPTION, this, EventStrings.getInstance().FIRE_EVENT, e);
                }
            }
        }
    }
    //@Throws(Exception.constructor)
    process(eventObject, eventListenerInterface) {
        let geographicMapCellPositionEventListenerInterface = eventListenerInterface;
        ;
        geographicMapCellPositionEventListenerInterface.onGeographicMapCellPositionEvent(eventObject);
    }
}
GeographicMapCellPositionEventHandler.instance = new GeographicMapCellPositionEventHandler();
