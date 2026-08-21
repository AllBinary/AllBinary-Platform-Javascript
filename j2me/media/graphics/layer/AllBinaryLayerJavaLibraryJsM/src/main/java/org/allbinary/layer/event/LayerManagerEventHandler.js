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
import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
import { BasicEventHandler } from '../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
export class LayerManagerEventHandler extends BasicEventHandler {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LayerManagerEventHandler.instance;
    }
    constructor() {
        super();
        this.list = new BasicArrayListD();
        this.CREATE = "Create";
        this.DELETE = "Delete";
    }
    addListener(layerManagerEventListener) {
        if (!this.list.contains(layerManagerEventListener)) {
            this.list.add(layerManagerEventListener);
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
                var layerManagerEventListener = this.list.objectArray[index];
                ;
                layerManagerEventListener.onCreateLayerManagerEvent(eventObject);
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
    fireDeleteEvent(eventObject) {
        for (var index = this.list.size(); --index >= 0;) {
            try {
                var layerManagerEventListener = this.list.objectArray[index];
                ;
                layerManagerEventListener.onDeleteLayerManagerEvent(eventObject);
                //: 
            }
            catch (e) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, EventStrings.getInstance().FIRE_EVENT, e);
            }
        }
        var eventListenerInterfaceList = this.eventListenerInterfaceList;
        ;
        var eventListenerInterface;
        ;
        var layerManagerEventListenerInterface;
        ;
        var index = 0;
        ;
        while (index < eventListenerInterfaceList.size()) {
            try {
                eventListenerInterface = eventListenerInterfaceList.objectArray[index];
                layerManagerEventListenerInterface = eventListenerInterface;
                layerManagerEventListenerInterface.onDeleteLayerManagerEvent(eventObject);
                //: 
            }
            catch (e) {
                this.logUtil.put(this.commonStrings.EXCEPTION, this, EventStrings.getInstance().FIRE_EVENT, e);
            }
            index++;
        }
    }
    //@Throws(Exception.constructor)
    process(eventObject, eventListenerInterface) {
        var layerManagerEventListenerInterface = eventListenerInterface;
        ;
        layerManagerEventListenerInterface.onCreateLayerManagerEvent(eventObject);
    }
}
LayerManagerEventHandler.instance = new LayerManagerEventHandler();
