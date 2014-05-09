/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstracttabhandler.d.ts" />

declare module goog.editor.plugins {

    class SpacesTabHandler extends goog.editor.plugins.AbstractTabHandler {
    
        /**
         * Plugin to handle tab keys when not in lists to add 4 spaces.
         * @constructor
         * @extends {goog.editor.plugins.AbstractTabHandler}
         * @final
         */
        constructor();
    }
}