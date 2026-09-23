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
import { Math } from '../../../java/lang/Math.js';
//not GWT import const Buffer
import { ByteBuffer } from '../../../java/nio/ByteBuffer.js';
//not GWT import const ByteBuffer
import { ByteOrder } from '../../../java/nio/ByteOrder.js';
//not GWT import const FloatBuffer
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GLUtil extends Object {
    constructor() {
        super(...arguments);
        this.BYTES_PER_FLOAT = 4;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GLUtil.instance;
    }
    makeFloatBuffer3(p_a, p_b, p_c) {
        var b = ByteBuffer.allocateDirect(3 * this.BYTES_PER_FLOAT);
        ;
        b.order(ByteOrder.nativeOrder());
        var buffer = b.asFloatBuffer();
        ;
        buffer.put(p_a);
        buffer.put(p_b);
        buffer.put(p_c);
        this.position(buffer, 0);
        //if statement needs to be on the same line and ternary does not work the same way.
        return buffer;
    }
    makeFloatBuffer4(p_a, p_b, p_c, p_d) {
        var b = ByteBuffer.allocateDirect(4 * this.BYTES_PER_FLOAT);
        ;
        b.order(ByteOrder.nativeOrder());
        var buffer = b.asFloatBuffer();
        ;
        buffer.put(p_a);
        buffer.put(p_b);
        buffer.put(p_c);
        buffer.put(p_d);
        this.position(buffer, 0);
        //if statement needs to be on the same line and ternary does not work the same way.
        return buffer;
    }
    makeFloatBuffer(byteBuffer) {
        var b = ByteBuffer.allocateDirect(byteBuffer.limit() * this.BYTES_PER_FLOAT);
        ;
        b.order(ByteOrder.nativeOrder());
        var buffer = b.asFloatBuffer();
        ;
        var unsigned = 0;
        ;
        var v = 0.0;
        ;
        while (byteBuffer.hasRemaining()) {
            unsigned = byteBuffer.get() & 0xFF;
            v = (unsigned) / 255;
            buffer.put(v);
        }
        this.position(buffer, 0);
        //if statement needs to be on the same line and ternary does not work the same way.
        return buffer;
    }
    position(buffer, newPosition) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return buffer.position(newPosition);
        ;
    }
    rotateUVs(uvs, angleDegrees, pivotU, pivotV) {
        var angleRad = Math.toRadians(angleDegrees);
        ;
        var cosA = Math.cos(angleRad);
        ;
        var sinA = Math.sin(angleRad);
        ;
        for (var i = 0; i < uvs.length;) {
            var u = uvs[i];
            ;
            var v = uvs[i + 1];
            ;
            var du = u - pivotU;
            ;
            var dv = v - pivotV;
            ;
            var ru = (du * cosA - dv * sinA) + pivotU;
            ;
            var rv = (du * sinA + dv * cosA) + pivotV;
            ;
            uvs[i] = ru;
            uvs[i + 1] = rv;
        }
    }
}
GLUtil.instance = new GLUtil();
