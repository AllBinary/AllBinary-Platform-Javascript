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
import { Hashtable } from '../../../../java/util/Hashtable.js';
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
import { BasicEventHandler } from '../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
export class TerrainEventHandler extends BasicEventHandler {
    static init() {
        TerrainEventHandler.hashtable = new Hashtable();
    }
    static getInstance(anyType = {}) {
        var eventHandlerCanBeNull = TerrainEventHandler.hashtable.get(anyType);
        ;
        if (eventHandlerCanBeNull ==
            null) {
            eventHandlerCanBeNull = new TerrainEventHandler();
            TerrainEventHandler.hashtable.put(anyType, eventHandlerCanBeNull);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return eventHandlerCanBeNull;
    }
    constructor() {
        super();
        this.list = new BasicArrayListD();
    }
    addListener(terrainEventListener) {
        if (!this.list.contains(terrainEventListener)) {
            this.list.add(terrainEventListener);
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
                var terrainEventListener = this.list.get(index);
                ;
                terrainEventListener.onTerrainEvent(eventObject);
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
        var terrainEventListenerInterface = eventListenerInterface;
        ;
        terrainEventListenerInterface.onTerrainEvent(eventObject);
    }
}
TerrainEventHandler.hashtable = NullUtil.getInstance().NULL_TABLE;
