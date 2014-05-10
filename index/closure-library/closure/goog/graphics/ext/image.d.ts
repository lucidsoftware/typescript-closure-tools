/// <reference path="../../../../globals.d.ts" />
/// <reference path="./element.d.ts" />
/// <reference path="./group.d.ts" />

declare module goog.graphics.ext {

    class Image extends __Image { }
    class __Image extends goog.graphics.ext.__Element {
    
        /**
         * Wrapper for a graphics image element.
         * @param {goog.graphics.ext.Group} group Parent for this element.
         * @param {string} src The path to the image to display.
         * @constructor
         * @extends {goog.graphics.ext.Element}
         * @final
         */
        constructor(group: goog.graphics.ext.Group, src: string);
    
        /**
         * Update the source of the image.
         * @param {string} src  Source of the image.
         */
        setSource(src: string): void;
    }
}
