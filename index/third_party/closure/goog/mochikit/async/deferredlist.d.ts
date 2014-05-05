// Generated Mon May  5 11:06:09 PDT 2014

/// <reference path="../../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../../closure/goog/promise/resolver.d.ts" />
/// <reference path="../../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../../closure/goog/testing/watchers.d.ts" />
/// <reference path="../../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../../closure/goog/async/nexttick.d.ts" />
/// <reference path="../../../../../closure/goog/async/run.d.ts" />
/// <reference path="../../../../../closure/goog/promise/thenable.d.ts" />
/// <reference path="../../../../../closure/goog/promise/promise.d.ts" />

declare module goog.async {

    /**
     * Constructs an object that waits on the results of multiple asynchronous
     * operations and marshals the results. It is itself a <code>Deferred</code>,
     * and may have an execution sequence of callback functions added to it. Each
     * <code>DeferredList</code> instance is single use and may be fired only once.
     *
     * The default behavior of a <code>DeferredList</code> is to wait for a success
     * or error result from every <code>Deferred</code> in its input list. Once
     * every result is available, the <code>DeferredList</code>'s execution sequence
     * is fired with a list of <code>[success, result]</code> array pairs, where
     * <code>success</code> is a boolean indicating whether <code>result</code> was
     * the product of a callback or errback. The list's completion criteria and
     * result list may be modified by setting one or more of the boolean options
     * documented below.
     *
     * <code>Deferred</code> instances passed into a <code>DeferredList</code> are
     * independent, and may have additional callbacks and errbacks added to their
     * execution sequences after they are passed as inputs to the list.
     *
     * @param {!Array.<!goog.async.Deferred>} list An array of deferred results to
     *     wait for.
     * @param {boolean=} opt_fireOnOneCallback Whether to stop waiting as soon as
     *     one input completes successfully. In this case, the
     *     <code>DeferredList</code>'s callback chain will be called with a two
     *     element array, <code>[index, result]</code>, where <code>index</code>
     *     identifies which input <code>Deferred</code> produced the successful
     *     <code>result</code>.
     * @param {boolean=} opt_fireOnOneErrback Whether to stop waiting as soon as one
     *     input reports an error. The failing result is passed to the
     *     <code>DeferredList</code>'s errback sequence.
     * @param {boolean=} opt_consumeErrors When true, any errors fired by a
     *     <code>Deferred</code> in the input list will be captured and replaced
     *     with a succeeding null result. Any callbacks added to the
     *     <code>Deferred</code> after its use in the <code>DeferredList</code> will
     *     receive null instead of the error.
     * @param {Function=} opt_canceler A function that will be called if the
     *     <code>DeferredList</code> is canceled. @see goog.async.Deferred#cancel
     * @param {Object=} opt_defaultScope The default scope to invoke callbacks or
     *     errbacks in.
     * @constructor
     * @extends {goog.async.Deferred}
     */
    class DeferredList extends goog.async.Deferred {
        /**
         * Constructs an object that waits on the results of multiple asynchronous
         * operations and marshals the results. It is itself a <code>Deferred</code>,
         * and may have an execution sequence of callback functions added to it. Each
         * <code>DeferredList</code> instance is single use and may be fired only once.
         *
         * The default behavior of a <code>DeferredList</code> is to wait for a success
         * or error result from every <code>Deferred</code> in its input list. Once
         * every result is available, the <code>DeferredList</code>'s execution sequence
         * is fired with a list of <code>[success, result]</code> array pairs, where
         * <code>success</code> is a boolean indicating whether <code>result</code> was
         * the product of a callback or errback. The list's completion criteria and
         * result list may be modified by setting one or more of the boolean options
         * documented below.
         *
         * <code>Deferred</code> instances passed into a <code>DeferredList</code> are
         * independent, and may have additional callbacks and errbacks added to their
         * execution sequences after they are passed as inputs to the list.
         *
         * @param {!Array.<!goog.async.Deferred>} list An array of deferred results to
         *     wait for.
         * @param {boolean=} opt_fireOnOneCallback Whether to stop waiting as soon as
         *     one input completes successfully. In this case, the
         *     <code>DeferredList</code>'s callback chain will be called with a two
         *     element array, <code>[index, result]</code>, where <code>index</code>
         *     identifies which input <code>Deferred</code> produced the successful
         *     <code>result</code>.
         * @param {boolean=} opt_fireOnOneErrback Whether to stop waiting as soon as one
         *     input reports an error. The failing result is passed to the
         *     <code>DeferredList</code>'s errback sequence.
         * @param {boolean=} opt_consumeErrors When true, any errors fired by a
         *     <code>Deferred</code> in the input list will be captured and replaced
         *     with a succeeding null result. Any callbacks added to the
         *     <code>Deferred</code> after its use in the <code>DeferredList</code> will
         *     receive null instead of the error.
         * @param {Function=} opt_canceler A function that will be called if the
         *     <code>DeferredList</code> is canceled. @see goog.async.Deferred#cancel
         * @param {Object=} opt_defaultScope The default scope to invoke callbacks or
         *     errbacks in.
         * @constructor
         * @extends {goog.async.Deferred}
         */
        constructor(list: goog.async.Deferred[], opt_fireOnOneCallback?: boolean, opt_fireOnOneErrback?: boolean, opt_consumeErrors?: boolean, opt_canceler?: Function, opt_defaultScope?: Object);
    }
}

declare module goog.async.DeferredList {

    /**
     * Creates a <code>DeferredList</code> that gathers results from multiple
     * <code>Deferred</code> inputs. If all inputs succeed, the callback is fired
     * with the list of results as a flat array. If any input fails, the list's
     * errback is fired immediately with the offending error, and all other pending
     * inputs are canceled.
     *
     * @param {!Array.<!goog.async.Deferred>} list The list of <code>Deferred</code>
     *     inputs to wait for.
     * @return {!goog.async.Deferred} The deferred list of results from the inputs
     *     if they all succeed, or the error result of the first input to fail.
     */
    function gatherResults(list: goog.async.Deferred[]): goog.async.Deferred;
}

