/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
import { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.js';
//not GWT import const InputStream
import { OutputStream } from '../../../../../java/io/OutputStream.js';
//not GWT import const OutputStream
import { Reader } from '../../../../../java/io/Reader.js';
//not GWT import const Reader
import { Writer } from '../../../../../java/io/Writer.js';
//not GWT import const CharBuffer
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { StreamUtil } from '../../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SimpleFileUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.NULL_WRITER = SimpleFileUtil.nullWriter();
        this.NULL_READER = SimpleFileUtil.nullReader();
        this.commonStrings = CommonStrings.getInstance();
        this.nullUtil = NullUtil.getInstance();
        this.streamUtil = StreamUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SimpleFileUtil.instance;
    }
    static nullOutputStream() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new class extends OutputStream {
            //@Throws(IOException.constructor)
            write(b) {
            }
            //@Throws(IOException.constructor)
            write(b, off, len) {
            }
            close() {
            }
        };
    }
    static nullWriter() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new class extends Writer {
            constructor() {
                super(...arguments);
                this.closed = false;
            }
            //@Throws(IOException.constructor)
            append(c) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this;
            }
            //@Throws(IOException.constructor)
            append(csq) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this;
            }
            //@Throws(IOException.constructor)
            append(csq, start, end) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this;
            }
            //@Throws(IOException.constructor)
            write(c) {
            }
            //@Throws(IOException.constructor)
            write(cbuf, off, len) {
            }
            //@Throws(IOException.constructor)
            write(str) {
            }
            //@Throws(IOException.constructor)
            write(str, off, len) {
            }
            //@Throws(IOException.constructor)
            flush() {
            }
            close() {
            }
        };
    }
    static nullReader() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new class extends Reader {
            //@Throws(IOException.constructor)
            read() {
                //if statement needs to be on the same line and ternary does not work the same way.
                return -1;
            }
            //@Throws(IOException.constructor)
            read(cbuf, off, len) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return -1;
            }
            //@Throws(IOException.constructor)
            read(target) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return -1;
            }
            //@Throws(IOException.constructor)
            ready() {
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
            //@Throws(IOException.constructor)
            skip(n) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return 0;
            }
            close() {
            }
        };
    }
    loadFileAsList(inputStream, max, byteArray1) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.loadFileAsListReturnLine(inputStream, max, byteArray1, 0);
        ;
    }
    loadFileAsListReturnLine(inputStream, max, byteArray1, includeReturnLine) {
        var stringList = new BasicArrayListD();
        ;
        if (inputStream ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return stringList;
        }
        var byteArray = this.nullUtil.NULL_BYTE_ARRAY;
        ;
        try {
            var outputStream2 = new ByteArrayOutputStream(max);
            ;
            byteArray = this.streamUtil.getByteArray(inputStream, outputStream2, byteArray1);
            this.streamUtil.close(inputStream);
            //: 
        }
        catch (e) {
            this.streamUtil.close(inputStream);
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.ADD, e);
        }
        if (byteArray ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return stringList;
        }
        var size = byteArray.length;
        ;
        var index = 0;
        ;
        var startIndex = 0;
        ;
        var returnLine = 0;
        ;
        while (index < size) {
            startIndex = index;
            while (index < size - 1 && byteArray[index] != .code)
                '\n'.code;
            {
                index++;
            }
            if (includeReturnLine == 0) {
                if (index > 0 && byteArray[index - 1] == .code)
                    '\r'.code;
                {
                    returnLine = 1;
                }
                {
                    returnLine = 0;
                }
            }
            var s = String.fromCharCode(...byteArray);
            ;
            stringList.add(s);
            index++;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringList;
    }
    createStringFromArrayOfStrings(stringArray) {
        var stringMaker = new StringMaker();
        ;
        var size = stringArray.length;
        ;
        for (var index = 0; index < size; index++) {
            stringMaker.append(stringArray[index]);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringMaker.toString();
        ;
    }
}
SimpleFileUtil.instance = new SimpleFileUtil();
