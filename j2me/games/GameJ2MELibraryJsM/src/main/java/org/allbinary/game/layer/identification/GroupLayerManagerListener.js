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
//not GWT import const LayerManagerEvent
import { LayerManagerEventHandler } from '../../../../../org/allbinary/layer/event/LayerManagerEventHandler.js';
//not GWT import const LayerManagerEventHandler
import { LayerManagerEventListener } from '../../../../../org/allbinary/layer/event/LayerManagerEventListener.js';
//not GWT import const LayerManagerEventListener
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const AllBinaryEventObject
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GroupLayerManagerListener extends LayerManagerEventListener {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GroupLayerManagerListener.SINGLETON;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.list = new BasicArrayListD();
        LayerManagerEventHandler.getInstance().addListener(this);
    }
    clear() {
        let groupList;
        ;
        let size = this.list.size();
        ;
        for (let index = size - 1; index >= 0; index--) {
            groupList = this.list.objectArray[index];
            groupList.clear();
        }
    }
    getGroupSizeFromInterface(groupInterfaceCompositeInterface) {
        let groupInterfaceArray = groupInterfaceCompositeInterface.getGroupInterface();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getGroupSize(groupInterfaceArray[0]);
        ;
    }
    getGroupSize(groupInterface) {
        let id = globalThis.Math.trunc(groupInterface.getGroupId());
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getGroupSizeById(id);
        ;
    }
    getList(groupInterface) {
        let id = globalThis.Math.trunc(groupInterface.getGroupId());
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getListById(id);
        ;
    }
    getListById(groupId) {
        let groupList = this.list.objectArray[groupId];
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return groupList;
    }
    getGroupSizeById(groupId) {
        let groupList = this.list.objectArray[groupId];
        ;
        let size = groupList.size();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return size;
    }
    areAllOtherGroupsEmpty(groupInterface) {
        let id = globalThis.Math.trunc(groupInterface.getGroupId());
        ;
        let size = this.list.size();
        ;
        for (let index = size - 1; index >= 0; index--) {
            if (id != index) {
                let groupSize = this.getGroupSizeById(index);
                ;
                if (groupSize != 0) {
                    this.logUtil.putF(new StringMaker().append("Group Size: ").appendint(groupSize).toString(), this, "areAllOtherGroupsEmpty");
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return false;
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    isIdInList(id, excludeGroupList) {
        let size = excludeGroupList.size();
        ;
        let groupInterfaceArray;
        ;
        let groupInterface;
        ;
        let groupId = 0;
        ;
        for (let index = size - 1; index >= 0; index--) {
            groupInterfaceArray = excludeGroupList.objectArray[index];
            let size2 = groupInterfaceArray.length;
            ;
            for (let index2 = 0; index2 < size2; index2++) {
                groupInterface = groupInterfaceArray[index2];
                groupId = globalThis.Math.trunc(groupInterface.getGroupId());
                if (groupId == id) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return true;
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    areAllOtherGroupsLessThan(excludeGroupList, maxSize) {
        let size = this.list.size();
        ;
        for (let index = size - 1; index >= 0; index--) {
            if (!this.isIdInList(index, excludeGroupList)) {
                let groupSize = this.getGroupSizeById(index);
                ;
                if (groupSize >= maxSize) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return false;
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    init(total) {
        while (this.list.size() <= total + 1) {
            this.list.add(new BasicArrayListD());
        }
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    //@Throws(Exception.constructor)
    onCreateLayerManagerEvent(layerManagerEvent) {
        let layerInterface = layerManagerEvent.getLayerInterface();
        ;
        let groupInterfaceArray = layerInterface.getGroupInterface();
        ;
        let size = groupInterfaceArray.length;
        ;
        let id = 0;
        ;
        let groupList;
        ;
        for (let index = 0; index < size; index++) {
            id = globalThis.Math.trunc(groupInterfaceArray[index].getGroupId());
            groupList = this.list.objectArray[id];
            if (groupList ==
                null) {
                this.logUtil.putF(new StringMaker().append("id: ").appendint(id).toString(), this, "onCreateLayerManagerEvent");
            }
            if (!groupList.contains(layerInterface)) {
                groupList.add(layerInterface);
            }
            else {
            }
        }
    }
    //@Throws(Exception.constructor)
    onDeleteLayerManagerEvent(layerManagerEvent) {
        let layerInterface = layerManagerEvent.getLayerInterface();
        ;
        let groupInterfaceArray = layerInterface.getGroupInterface();
        ;
        let size = groupInterfaceArray.length;
        ;
        let id = 0;
        ;
        let groupList;
        ;
        for (let index = 0; index < size; index++) {
            id = globalThis.Math.trunc(groupInterfaceArray[index].getGroupId());
            groupList = this.list.objectArray[id];
            groupList.remove(layerInterface);
        }
    }
    log() {
        let stringBuffer = new StringMaker();
        ;
        let GROUP = "Group: ";
        ;
        let SPACE = CommonSeps.getInstance().SPACE;
        ;
        let TOTAL_LABEL = CommonLabels.getInstance().TOTAL_LABEL;
        ;
        let size = this.list.size();
        ;
        for (let index = size - 1; index >= 0; index--) {
            let groupList = this.list.objectArray[index];
            ;
            stringBuffer.append(GROUP);
            stringBuffer.appendint(index);
            stringBuffer.append(SPACE);
            stringBuffer.append(TOTAL_LABEL);
            stringBuffer.appendint(groupList.size());
            stringBuffer.append(SPACE);
        }
        this.logUtil.putF(stringBuffer.toString(), this, "log");
    }
}
GroupLayerManagerListener.SINGLETON = new GroupLayerManagerListener();
