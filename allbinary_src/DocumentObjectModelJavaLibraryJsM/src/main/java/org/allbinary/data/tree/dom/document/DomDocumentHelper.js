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
import { ByteArrayOutputStream } from '../../../../../../java/io/ByteArrayOutputStream.js';
import { StringBufferInputStream } from '../../../../../../java/io/StringBufferInputStream.js';
import { DocumentBuilderFactory } from '../../../../../../javax/xml/parsers/DocumentBuilderFactory.js';
import { TransformerFactory } from '../../../../../../javax/xml/transform/TransformerFactory.js';
import { DOMSource } from '../../../../../../javax/xml/transform/dom/DOMSource.js';
import { StreamResult } from '../../../../../../javax/xml/transform/stream/StreamResult.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DomDocumentHelper extends Object {
    static create() {
        try {
            var factory = DocumentBuilderFactory.newInstance();
            ;
            var builder = factory.newDocumentBuilder();
            ;
            var document = builder.newDocument();
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return document;
            //: 
        }
        catch (e) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
    }
    //@Throws(Exception.constructor)
    static create(inputStream) {
        try {
            var factory = DocumentBuilderFactory.newInstance();
            ;
            var builder = factory.newDocumentBuilder();
            ;
            var document = builder.parse(inputStream);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return document;
            //: 
        }
        catch (e) {
            throw e;
        }
    }
    //@Throws(Exception.constructor)
    static create(xmlString) {
        try {
            var factory = DocumentBuilderFactory.newInstance();
            ;
            var builder = factory.newDocumentBuilder();
            ;
            var document = builder.parse(new StringBufferInputStream(xmlString));
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return document;
            //: 
        }
        catch (e) {
            throw e;
        }
    }
    //@Throws(Exception.constructor)
    static toString(document) {
        try {
            var domSource = new DOMSource(document);
            ;
            var byteArrayOutputStream = new ByteArrayOutputStream();
            ;
            var streamResult = new StreamResult(byteArrayOutputStream);
            ;
            var copyTransformerFactory = TransformerFactory.newInstance();
            ;
            var copyTransformer = copyTransformerFactory.newTransformer();
            ;
            copyTransformer.transform(domSource, streamResult);
            //if statement needs to be on the same line and ternary does not work the same way.
            return byteArrayOutputStream.toString();
            ;
            //: 
        }
        catch (e) {
            throw e;
        }
    }
    constructor() {
        super();
    }
}
