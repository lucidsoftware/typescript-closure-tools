/// <reference path="../../../globals.d.ts" />
/// <reference path="./hash.d.ts" />

declare module goog.crypt {

    class Sha1 extends __Sha1 { }
    class __Sha1 extends goog.crypt.__Hash {
    
        /**
         * SHA-1 cryptographic hash constructor.
         *
         * The properties declared here are discussed in the above algorithm document.
         * @constructor
         * @extends {goog.crypt.Hash}
         * @final
         * @struct
         */
        constructor();
    }
}
