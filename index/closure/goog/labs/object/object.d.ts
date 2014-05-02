// Generated Thu May  1 16:45:23 PDT 2014

/// <reference path="../../../goog/base.d.ts" />

declare module goog.labs.object {

    /**
     * Whether two values are not observably distinguishable. This
     * correctly detects that 0 is not the same as -0 and two NaNs are
     * practically equivalent.
     *
     * The implementation is as suggested by harmony:egal proposal.
     *
     * @param {*} v The first value to compare.
     * @param {*} v2 The second value to compare.
     * @return {boolean} Whether two values are not observably distinguishable.
     * @see http://wiki.ecmascript.org/doku.php?id=harmony:egal
     */
    function is(v: any, v2: any): boolean;
}

