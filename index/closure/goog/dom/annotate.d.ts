// Generated Thu May  1 16:38:46 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />

declare module goog.dom.annotate {

    /**
     * Calls {@code annotateFn} for each occurrence of a search term in text nodes
     * under {@code node}. Returns the number of hits.
     *
     * @param {Node} node  A DOM node.
     * @param {Array} terms  An array of [searchTerm, matchWholeWordOnly] tuples.
     *   The matchWholeWordOnly value is a per-term attribute because some terms
     *   may be CJK, while others are not. (For correctness, matchWholeWordOnly
     *   should always be false for CJK terms.).
     * @param {Function} annotateFn  A function that takes
     *   (1) the number of the term that is "hit",
     *   (2) the HTML string (search term) to be annotated,
     *   and returns the annotated term as an HTML string.
     * @param {*=} opt_ignoreCase  Whether to ignore the case of the query
     *   terms when looking for matches.
     * @param {Array.<string>=} opt_classesToSkip  Nodes with one of these CSS class
     *   names (and its descendants) will be skipped.
     * @param {number=} opt_maxMs  Number of milliseconds after which this function,
     *   if still annotating, should stop and return.
     *
     * @return {boolean} Whether any terms were annotated.
     */
    function annotateTerms(node: Node, terms: any[], annotateFn: Function, opt_ignoreCase?: any, opt_classesToSkip?: string[], opt_maxMs?: number): boolean;

    /**
     * Annotates occurrences of query terms in plain text. This process consists of
     * identifying all occurrences of all query terms, calling a provided function
     * to get the appropriate replacement HTML for each occurrence, and
     * HTML-escaping all the text.
     *
     * @param {string} text  The plain text to be searched.
     * @param {Array} terms  An array of
     *   [{string} searchTerm, {boolean} matchWholeWordOnly] tuples.
     *   The matchWholeWordOnly value is a per-term attribute because some terms
     *   may be CJK, while others are not. (For correctness, matchWholeWordOnly
     *   should always be false for CJK terms.).
     * @param {Function} annotateFn {function(number, string) : string} A function
     *   that takes
     *   (1) the number of the term that is "hit",
     *   (2) the HTML string (search term) to be annotated,
     *   and returns the annotated term as an HTML string.
     * @param {*=} opt_ignoreCase  Whether to ignore the case of the query
     *   terms when looking for matches.
     * @return {?string} The HTML equivalent of {@code text} with terms
     *   annotated, or null if the text did not contain any of the terms.
     */
    function annotateText(text: string, terms: any[], annotateFn: Function, opt_ignoreCase?: any): string;
}

