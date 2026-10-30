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
import { LayerManagerEvent } from '../../../org/allbinary/layer/event/LayerManagerEvent.js';
//not GWT import const LayerManagerEvent
import { LayerManagerEventHandler } from '../../../org/allbinary/layer/event/LayerManagerEventHandler.js';
//not GWT import const LayerManagerEventHandler
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LayerManager } from './LayerManager.js';
//sameFolderImports - not GWT import - same folder const LayerProcessor
import { LayerManagerNoDebug } from './LayerManagerNoDebug.js';
//sameFolderImports - not GWT import - same folder const AllBinaryLayer
export class AllBinaryLayerManager extends LayerManager {
    constructor() {
        super(LayerManagerNoDebug.getInstance());
        this.layerManagerEventHandler = LayerManagerEventHandler.getInstance();
        this.createLayerManagerEvent = new LayerManagerEvent(this, this.layerManagerEventHandler.CREATE);
        this.deleteLayerManagerEvent = new LayerManagerEvent(this, this.layerManagerEventHandler.DELETE);
        this.basicLayerProcessorArray = [];
        //For kotlin this is before the body of the constructor.
    }
    getLayerProcessorArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicLayerProcessorArray;
    }
    setLayerProcessorArray(layerProcessorArray) {
        this.basicLayerProcessorArray = layerProcessorArray;
    }
    log() {
        let size = this.basicLayerProcessorArray.length;
        ;
        for (let index = 0; index < size; index++) {
            let layerProcessorInterface = this.basicLayerProcessorArray[index];
            ;
        }
    }
    //@Throws(Exception.constructor)
    append(layerInterface) {
        if (!this.contains(layerInterface)) {
            this.appendProcessors(layerInterface);
            super.append(layerInterface);
        }
    }
    //@Throws(Exception.constructor)
    appendAt(layerInterface, index) {
        if (!this.contains(layerInterface)) {
            this.appendProcessors(layerInterface);
            super.appendAt(layerInterface, index);
        }
    }
    //@Throws(Exception.constructor)
    appendProcessors(layerInterface) {
        this.createLayerManagerEvent.setLayerInterface(layerInterface);
        this.layerManagerEventHandler.fireEvent(this.createLayerManagerEvent);
        let layerProcessorInterface;
        ;
        for (let index = this.basicLayerProcessorArray.length; --index >= 0;) {
            layerProcessorInterface = this.basicLayerProcessorArray[index];
            if (layerProcessorInterface.isProcessorLayer(layerInterface)) {
                layerProcessorInterface.getLayerManager().append(layerInterface);
            }
        }
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    remove(layerInterface) {
        this.deleteLayerManagerEvent.setLayerInterface(layerInterface);
        this.layerManagerEventHandler.fireDeleteEvent(this.deleteLayerManagerEvent);
        let layerProcessorInterface;
        ;
        for (let index = this.basicLayerProcessorArray.length; --index >= 0;) {
            layerProcessorInterface = this.basicLayerProcessorArray[index];
            layerProcessorInterface.getLayerManager().remove(layerInterface);
        }
        super.remove(layerInterface);
    }
    //@Throws(Exception.constructor)
    process() {
        let layerProcessorInterface;
        ;
        let size = this.basicLayerProcessorArray.length;
        ;
        for (let index = 0; index < size; index++) {
            layerProcessorInterface = this.basicLayerProcessorArray[index];
            layerProcessorInterface.process(this);
        }
    }
    //@Throws(Exception.constructor)
    cleanup() {
        let layerProcessorInterface;
        ;
        let size = this.basicLayerProcessorArray.length;
        ;
        for (let index = 0; index < size; index++) {
            layerProcessorInterface = this.basicLayerProcessorArray[index];
            layerProcessorInterface.getLayerManager().cleanup();
        }
        super.cleanup();
    }
}
