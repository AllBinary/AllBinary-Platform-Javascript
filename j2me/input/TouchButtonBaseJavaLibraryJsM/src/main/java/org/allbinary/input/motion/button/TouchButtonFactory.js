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
import { Object } from '../../../../../java/lang/Object.js';
import { Exception } from '../../../../../java/lang/Exception.js';
import { BasicArrayListUtil } from '../../../../../org/allbinary/util/BasicArrayListUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TouchButtonFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TouchButtonFactory.SINGLETON;
    }
    constructor() {
        super();
        this.LIST = BasicArrayListUtil.getInstance().getImmutableInstance();
        this.list = this.LIST;
        this.savedList = this.LIST;
        this.saved = false;
    }
    defaultList() {
        this.list = this.LIST;
        this.toggle(false, this.LIST);
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    toggle(save, list) {
        if (list != BasicArrayListUtil.getInstance().getImmutableInstance()) {
            this.savedList = list;
            if (!this.saved) {
                this.list = this.savedList;
            }
        }
        else {
            if (save) {
                if (!this.saved) {
                    this.saved = true;
                    this.savedList = this.list;
                    this.list = this.LIST;
                }
                else {
                }
            }
            else {
                this.list = this.savedList;
                this.saved = false;
            }
        }
    }
    //@Throws(Exception.constructor)
    setList(list) {
        if (list ==
            null) {
            throw new Exception("Null List");
        }
        this.list = list;
    }
    getList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list;
    }
}
TouchButtonFactory.SINGLETON = new TouchButtonFactory();
