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
//not plain js import { Writer } 
const Writer = globalThis.java.io.Writer;
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
        let stringList = new BasicArrayListD();
        ;
        if (inputStream ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return stringList;
        }
        let byteArray = this.nullUtil.NULL_BYTE_ARRAY;
        ;
        try {
            let outputStream2 = new ByteArrayOutputStream(max);
            ;
            byteArray = this.streamUtil.getByteArray(inputStream, outputStream2, byteArray1);
            this.streamUtil.close(inputStream);
        }
        catch (caught) {
            {
                const e = caught;
                this.streamUtil.close(inputStream);
                this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.ADD, e);
            }
        }
        if (byteArray ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return stringList;
        }
        let size = byteArray.length;
        ;
        let index = 0;
        ;
        let startIndex = 0;
        ;
        let returnLine = 0;
        ;
        while (index < size) {
            startIndex = index;
            while (index < size - 1 && byteArray[index] != (('\n'.charCodeAt(0)) << 24 >> 24)) {
                index++;
            }
            if (includeReturnLine == 0) {
                if (index > 0 && byteArray[index - 1] == (('\r'.charCodeAt(0)) << 24 >> 24)) {
                    returnLine = 1;
                }
                else {
                    returnLine = 0;
                }
            }
            let s = ((data, offset, count) => data.slice(offset, offset + count).map(value => typeof value === 'number' ? String.fromCharCode(value & 255) : value).join(''))(byteArray, startIndex, (index + includeReturnLine - returnLine - startIndex));
            ;
            stringList.add(s);
            index++;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringList;
    }
    createStringFromArrayOfStrings(stringArray) {
        let stringMaker = new StringMaker();
        ;
        let size = stringArray.length;
        ;
        for (let index = 0; index < size; index++) {
            stringMaker.append(stringArray[index]);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringMaker.toString();
        ;
    }
}
SimpleFileUtil.instance = new SimpleFileUtil();
