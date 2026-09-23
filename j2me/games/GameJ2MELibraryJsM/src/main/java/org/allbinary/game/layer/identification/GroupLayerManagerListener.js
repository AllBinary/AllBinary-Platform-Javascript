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
        var groupList;
        ;
        var size = this.list.size();
        ;
        for (var index = size - 1; index >= 0; index--) {
            groupList = this.list.objectArray[index];
            groupList.clear();
        }
    }
    getGroupSizeFromInterface(groupInterfaceCompositeInterface) {
        var groupInterfaceArray = groupInterfaceCompositeInterface.getGroupInterface();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getGroupSize(groupInterfaceArray[0]);
        ;
    }
    getGroupSize(groupInterface) {
        var id = Math.round(groupInterface.getGroupId());
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getGroupSizeById(id);
        ;
    }
    getList(groupInterface) {
        var id = Math.round(groupInterface.getGroupId());
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getListById(id);
        ;
    }
    getListById(groupId) {
        var groupList = this.list.objectArray[groupId];
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return groupList;
    }
    getGroupSizeById(groupId) {
        var groupList = this.list.objectArray[groupId];
        ;
        var size = groupList.size();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return size;
    }
    areAllOtherGroupsEmpty(groupInterface) {
        var id = Math.round(groupInterface.getGroupId());
        ;
        var size = this.list.size();
        ;
        for (var index = size - 1; index >= 0; index--) {
            if (id != index) {
                var groupSize = this.getGroupSizeById(index);
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
        var size = excludeGroupList.size();
        ;
        var groupInterfaceArray;
        ;
        var groupInterface;
        ;
        var groupId = 0;
        ;
        for (var index = size - 1; index >= 0; index--) {
            groupInterfaceArray = excludeGroupList.objectArray[index];
            var size2 = groupInterfaceArray.length;
            ;
            for (var index2 = 0; index2 < size2; index2++) {
                groupInterface = groupInterfaceArray[index2];
                groupId = Math.round(groupInterface.getGroupId());
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
        var size = this.list.size();
        ;
        for (var index = size - 1; index >= 0; index--) {
            if (!this.isIdInList(index, excludeGroupList)) {
                var groupSize = this.getGroupSizeById(index);
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
        var layerInterface = layerManagerEvent.getLayerInterface();
        ;
        var groupInterfaceArray = layerInterface.getGroupInterface();
        ;
        var size = groupInterfaceArray.length;
        ;
        var id = 0;
        ;
        var groupList;
        ;
        for (var index = 0; index < size; index++) {
            id = Math.round(groupInterfaceArray[index].getGroupId());
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
        var layerInterface = layerManagerEvent.getLayerInterface();
        ;
        var groupInterfaceArray = layerInterface.getGroupInterface();
        ;
        var size = groupInterfaceArray.length;
        ;
        var id = 0;
        ;
        var groupList;
        ;
        for (var index = 0; index < size; index++) {
            id = Math.round(groupInterfaceArray[index].getGroupId());
            groupList = this.list.objectArray[id];
            groupList.remove(layerInterface);
        }
    }
    log() {
        var stringBuffer = new StringMaker();
        ;
        var GROUP = "Group: ";
        ;
        var SPACE = CommonSeps.getInstance().SPACE;
        ;
        var TOTAL_LABEL = CommonLabels.getInstance().TOTAL_LABEL;
        ;
        var size = this.list.size();
        ;
        for (var index = size - 1; index >= 0; index--) {
            var groupList = this.list.objectArray[index];
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
