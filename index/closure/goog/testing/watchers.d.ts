// Generated Mon May  5 11:04:16 PDT 2014

/// <reference path="../../../closure/goog/base.d.ts" />

declare module goog.testing.watchers {

    /** @private {!Array.<function()>} */
    var resetWatchers_: any /*missing*/;

    /**
     * Fires clock reset watching functions.
     */
    function signalClockReset(): void;

    /**
     * Enqueues a function to be called when the clock used for setTimeout is reset.
     * @param {function()} fn
     */
    function watchClockReset(fn: () => any /*missing*/): void;
}

