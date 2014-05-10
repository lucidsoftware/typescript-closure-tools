/// <reference path="../../../../globals.d.ts" />
/// <reference path="./inputhandler.d.ts" />

declare module goog.ui.ac {

    class RichInputHandler extends __RichInputHandler { }
    class __RichInputHandler extends goog.ui.ac.__InputHandler {
    
        /**
         * Class for managing the interaction between an autocomplete object and a
         * text-input or textarea.
         * @param {?string=} opt_separators Seperators to split multiple entries.
         * @param {?string=} opt_literals Characters used to delimit text literals.
         * @param {?boolean=} opt_multi Whether to allow multiple entries
         *     (Default: true).
         * @param {?number=} opt_throttleTime Number of milliseconds to throttle
         *     keyevents with (Default: 150).
         * @constructor
         * @extends {goog.ui.ac.InputHandler}
         */
        constructor(opt_separators?: string, opt_literals?: string, opt_multi?: boolean, opt_throttleTime?: number);
    }
}
