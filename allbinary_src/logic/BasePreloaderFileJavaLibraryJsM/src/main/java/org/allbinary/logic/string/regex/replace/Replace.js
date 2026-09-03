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
import { Integer } from '../../../../../../java/lang/Integer.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;
import { J2SEUtil } from '../../../../../../org/allbinary/J2SEUtil.js';
//not GWT import const J2SEUtil = globalThis.org.allbinary.J2SEUtil;
import { AppUrlGlobals } from '../../../../../../org/allbinary/globals/AppUrlGlobals.js';
//not GWT import const AppUrlGlobals = globalThis.org.allbinary.globals.AppUrlGlobals;
import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;
import { StdUtil } from '../../../../../../org/allbinary/logic/StdUtil.js';
//not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { LogConfigTypes } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
//not GWT import const LogConfigTypes = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypes;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class Replace extends Object {
    static main(args) {
        try {
            var stringUtil = StringUtil.getInstance();
            ;
            var appUrlGlobals = new AppUrlGlobals();
            ;
            appUrlGlobals.setWebappPath("G:/mnt/bc/mydev/work/allbinary_src/ToolsJavaLibrary/tools");
            URLGLOBALS.init(appUrlGlobals);
            var testString = "\"super gun\" big tank \"goodgunriflegun";
            ;
            var replace = new Replace("gun", "abcdefghijklmnopqrstuxwxyzabcdefghijklmnopqrstuxwxyz");
            ;
            console.log("Old String: " + testString);
            testString = replace.all(testString);
            console.log("New String: " + testString);
            var replaceCat = new Replace("abcdefghijklmnopqrstuxwxyzabcdefghijklmnopqrstuxwxyz", stringUtil.EMPTY_STRING);
            ;
            testString = replaceCat.all(testString);
            console.log("New String: " + testString);
            //: 
        }
        catch (e) {
        }
    }
    constructor(key, value) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.j2seUtil = J2SEUtil.getInstance();
        this.REPLACERS_ = "Replacers: ";
        this.ALL = "all";
        this.FOUND_KEY = "found key total: ";
        this.hashMap = StdUtil.getInstance().createHashMap();
        this.hashMap.put([
            key
        ], [
            value
        ]);
    }
    constructor(keys, values) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.j2seUtil = J2SEUtil.getInstance();
        this.REPLACERS_ = "Replacers: ";
        this.ALL = "all";
        this.FOUND_KEY = "found key total: ";
        this.hashMap = StdUtil.getInstance().createHashMap();
        this.hashMap.put(keys, values);
    }
    constructor(hashMap) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.j2seUtil = J2SEUtil.getInstance();
        this.REPLACERS_ = "Replacers: ";
        this.ALL = "all";
        this.FOUND_KEY = "found key total: ";
        this.hashMap = hashMap;
    }
    all(replace) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.upTo(replace, Integer.MIN_VALUE);
        ;
    }
    upTo(replace, total) {
        var newStringBuffer = new StringMaker();
        ;
        var totalNumberOfReplaces = 0;
        ;
        var keys;
        ;
        var values;
        ;
        var keyArray = this.j2seUtil.getHashMapAsArray(this.hashMap);
        ;
        var size = keyArray.length;
        ;
        for (var index2 = 0; index2 < size; index2++) {
            keys = keyArray[index2];
            values = this.hashMap.get(keys);
            var foundTotal = 0;
            ;
            var index = 0;
            ;
            var nextKey;
            ;
            var end = 0;
            ;
            var nextSecondKey;
            ;
            var begin2 = 0;
            ;
            while (index < replace.length) {
                var begin = replace.indexOf(keys[0], index);
                ;
                if (begin != -1) {
                    foundTotal++;
                    if (foundTotal % 100 == 0) {
                        console.log(this.FOUND_KEY + foundTotal);
                    }
                    nextKey = keys[0];
                    end = begin + nextKey.length;
                    newStringBuffer.delete(0, newStringBuffer.length());
                    newStringBuffer.append(replace.substring(0, begin));
                    newStringBuffer.append(values[0]);
                    index = newStringBuffer.length();
                    newStringBuffer.append(replace.substring(end, replace.length));
                    replace = newStringBuffer.toString();
                    if (keys.length > 1) {
                        nextSecondKey = keys[1];
                        begin2 = replace.indexOf(nextSecondKey, index);
                        if (begin2 != -1) {
                            var end2 = begin2 + nextSecondKey.length;
                            ;
                            newStringBuffer.delete(0, newStringBuffer.length());
                            newStringBuffer.append(replace.substring(0, begin2));
                            newStringBuffer.append(values[1]);
                            index = newStringBuffer.length();
                            newStringBuffer.append(replace.substring(end2, replace.length));
                            replace = newStringBuffer.toString();
                        }
                    }
                    totalNumberOfReplaces++;
                    if (total != Integer.MIN_VALUE && totalNumberOfReplaces >= total) {
                        break;
                    }
                }
                else {
                    break;
                }
            }
        }
        if (totalNumberOfReplaces > 0) {
            if (LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().REPLACE)) {
                this.logUtil.putF("Total Number Of Replaces: " + totalNumberOfReplaces, this, this.ALL);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return replace;
    }
    line(replace) {
        var newStringBuffer = new StringMaker();
        ;
        var totalNumberOfReplaces = 0;
        ;
        var key;
        ;
        var value;
        ;
        var keyArray = this.j2seUtil.getHashMapAsArray(this.hashMap);
        ;
        var size = keyArray.length;
        ;
        for (var index2 = 0; index2 < size; index2++) {
            key = keyArray[index2];
            value = this.hashMap.get(key);
            var index = 0;
            ;
            while (index < replace.length) {
                newStringBuffer.delete(0, newStringBuffer.length());
                var begin = replace.indexOf(key, index);
                ;
                if (begin != -1) {
                    console.log(this.FOUND_KEY);
                    var end = replace.indexOf('\n', begin + key.length) + 1;
                    ;
                    if (end >= 0) {
                        newStringBuffer.append(replace.substring(0, begin));
                        index = newStringBuffer.length();
                        newStringBuffer.append(replace.substring(end, replace.length));
                        replace = newStringBuffer.toString();
                        totalNumberOfReplaces++;
                    }
                }
                else {
                    break;
                }
            }
        }
        if (LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance().REPLACE)) {
            this.logUtil.putF("Total Number Of Replaces: " + totalNumberOfReplaces, this, this.ALL);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return replace;
    }
}
