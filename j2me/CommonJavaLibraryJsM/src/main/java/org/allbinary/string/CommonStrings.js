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
import { Object } from '../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CommonStrings extends Object {
    constructor() {
        super(...arguments);
        this.EMPTY = "Empty";
        this.CREATE_IMAGE = "createImage";
        this.PLEASE_WAIT = "Please Wait";
        this.PLEASE_WAIT_FOR_SERVER = "Please Wait Getting Data From Server...";
        this.PERIODS = "...";
        this.LOADING = "Loading...";
        this.CONSTRUCTOR = "Constructor";
        this.START = "Start";
        this.END = "End";
        this.EXCEPTION = "Exception";
        this.EXCEPTION_LABEL = "Exception: ";
        this.CLEANUP = "cleanup";
        this.INIT = "init";
        this.CLOSE = "close";
        this.UP = "up";
        this.DOWN = "down";
        this.LEFT = "left";
        this.RIGHT = "right";
        this.DIRECTION_NAME = [
            this.DOWN, this.LEFT, this.RIGHT, this.UP
        ];
        this.CREATE = "Create";
        this.REMOVE = "Remove";
        this.UPDATE = "Update";
        this.DELETE = "Delete";
        this.delete = "delete";
        this.LOAD = "load";
        this.SAVE = "save";
        this.ADD = "Add";
        this.DROP = "Drop";
        this.INSERT = "Insert";
        this.VISIT = "visit";
        this.START_METHOD_NAME = this.START;
        this.END_METHOD_NAME = "end";
        this.GET = "get";
        this.PROCESS = "process";
        this.GET_INSTANCE = "getInstance";
        this.GET_LIST = "getList";
        this.RUN = "run";
        this.START_RUNNABLE = "Start Runnable";
        this.RUNNING = "Running";
        this.END_RUNNABLE = "End Runnable";
        this.DISABLE = "disable";
        this.ENABLE = "enable";
        this.SUCCESS = "Command Success";
        this.FAILURE = "Command Failed";
        this.NOT_IMPLEMENTED = "Not Implemented";
        this.UNKNOWN = "Unknown";
        this.ON_EVENT = "onEvent";
        this.IS_VALID = "isValid";
        this.TOSTRING = "toString";
        this.ADD_LISTENER = "addListener";
        this.REMOVE_LISTENER = "removeListener";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CommonStrings.instance;
    }
}
CommonStrings.instance = new CommonStrings();
