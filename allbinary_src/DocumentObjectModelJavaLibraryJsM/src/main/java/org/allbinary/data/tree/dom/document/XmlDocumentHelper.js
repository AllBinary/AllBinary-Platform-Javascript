/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
var _a, _b, _c, _d, _e;
var _f, _g;
/* Generated Code Do Not Modify */
import { Object } from '../../../../../../java/lang/Object.js';
import { ByteArrayOutputStream } from '../../../../../../java/io/ByteArrayOutputStream.js';
//not GWT import const ByteArrayOutputStream
import { StringReader } from '../../../../../../java/io/StringReader.js';
//not GWT import const StringReader
import { StringWriter } from '../../../../../../java/io/StringWriter.js';
//not GWT import const StringWriter
//not plain js import { Writer } 
const Writer = ((_f = (_b = (_a = globalThis.java) === null || _a === void 0 ? void 0 : _a.io) === null || _b === void 0 ? void 0 : _b.Writer) !== null && _f !== void 0 ? _f : class {
});
import { DocumentBuilderFactory } from '../../../../../../javax/xml/parsers/DocumentBuilderFactory.js';
//not GWT import const DocumentBuilderFactory
import { OutputKeys } from '../../../../../../javax/xml/transform/OutputKeys.js';
//not GWT import const Transformer
import { TransformerFactory } from '../../../../../../javax/xml/transform/TransformerFactory.js';
//not GWT import const TransformerFactory
import { DOMSource } from '../../../../../../javax/xml/transform/dom/DOMSource.js';
//not GWT import const DOMSource
import { StreamResult } from '../../../../../../javax/xml/transform/stream/StreamResult.js';
//not GWT import const StreamResult
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { BooleanFactory } from '../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory
import { CharacterSetData } from '../../../../../../org/allbinary/logic/java/characters/CharacterSetData.js';
//not GWT import const CharacterSetData
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const Document
//not plain js import { InputSource } 
const InputSource = ((_g = (_e = (_d = (_c = globalThis.org) === null || _c === void 0 ? void 0 : _c.xml) === null || _d === void 0 ? void 0 : _d.sax) === null || _e === void 0 ? void 0 : _e.InputSource) !== null && _g !== void 0 ? _g : class {
});
//Current folder imports from return types, extended types, and scope (deduplicated)
export class XmlDocumentHelper extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return XmlDocumentHelper.instance;
    }
    //@Throws(Exception.constructor)
    static toString(document) {
        try {
            let domSource = new DOMSource(document);
            ;
            let byteArrayOutputStream = new ByteArrayOutputStream();
            ;
            let streamResult = new StreamResult(byteArrayOutputStream);
            ;
            let copyTransformerFactory = TransformerFactory.newInstance();
            ;
            let copyTransformer = copyTransformerFactory.newTransformer();
            ;
            copyTransformer.transform(domSource, streamResult);
            //if statement needs to be on the same line and ternary does not work the same way.
            return byteArrayOutputStream.toString();
            ;
        }
        catch (caught) {
            {
                const e = caught;
                throw e;
            }
        }
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.INDENT_NUMBER = "indent-number";
        this.init(4, true);
    }
    init(indent, ignoreDeclaration) {
        try {
            let booleanFactory = BooleanFactory.getInstance();
            ;
            let transformerFactory = TransformerFactory.newInstance();
            ;
            transformerFactory.setAttribute(this.INDENT_NUMBER, indent);
            this.transformer = transformerFactory.newTransformer();
            this.transformer.setOutputProperty(OutputKeys.ENCODING, CharacterSetData.getInstance().UTF_8);
            this.transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, (ignoreDeclaration ? booleanFactory.YES : booleanFactory.NO));
            this.transformer.setOutputProperty(OutputKeys.INDENT, booleanFactory.YES);
        }
        catch (caught) {
            {
                const e = caught;
                let commonStrings = CommonStrings.getInstance();
                ;
                this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.INIT, e);
            }
        }
    }
    //@Throws(Exception.constructor)
    format(xmlString) {
        let src = new InputSource(new StringReader(xmlString));
        ;
        let document = DocumentBuilderFactory.newInstance().newDocumentBuilder().parse(src);
        ;
        let out = new StringWriter();
        ;
        this.transformer.transform(new DOMSource(document), new StreamResult(out));
        //if statement needs to be on the same line and ternary does not work the same way.
        return out.toString();
        ;
    }
}
XmlDocumentHelper.instance = new XmlDocumentHelper();
