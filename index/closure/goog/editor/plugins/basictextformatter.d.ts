// Generated Mon May  5 10:57:57 PDT 2014

/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/editor/defines.d.ts" />
/// <reference path="../../../../closure/goog/useragent/product.d.ts" />
/// <reference path="../../../../closure/goog/useragent/product_isversion.d.ts" />
/// <reference path="../../../../closure/goog/editor/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/editor/style.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/dom/rangeendpoint.d.ts" />
/// <reference path="../../../../closure/goog/dom/iter.d.ts" />
/// <reference path="../../../../closure/goog/editor/node.d.ts" />
/// <reference path="../../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/dom/savedrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagiterator.d.ts" />
/// <reference path="../../../../closure/goog/dom/abstractrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/textrangeiterator.d.ts" />
/// <reference path="../../../../closure/goog/string/stringbuffer.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/abstractrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/w3crange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/webkitrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/ierange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/geckorange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/operarange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/browserrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/textrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/abstractmultirange.d.ts" />
/// <reference path="../../../../closure/goog/dom/controlrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/multirange.d.ts" />
/// <reference path="../../../../closure/goog/dom/range.d.ts" />
/// <reference path="../../../../closure/goog/editor/range.d.ts" />
/// <reference path="../../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../../closure/goog/editor/command.d.ts" />
/// <reference path="../../../../closure/goog/editor/link.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/editor/plugin.d.ts" />
/// <reference path="../../../../closure/goog/ui/editor/messages.d.ts" />

declare module goog.editor.plugins {

    /**
     * Functions to style text (e.g. underline, make bold, etc.)
     * @constructor
     * @extends {goog.editor.Plugin}
     */
    class BasicTextFormatter extends goog.editor.Plugin {
        /**
         * Functions to style text (e.g. underline, make bold, etc.)
         * @constructor
         * @extends {goog.editor.Plugin}
         */
        constructor();
    }
}

declare module goog.editor.plugins.BasicTextFormatter {

    /**
     * Commands implemented by this plugin.
     * @enum {string}
     */
    enum COMMAND { LINK, FORMAT_BLOCK, INDENT, OUTDENT, STRIKE_THROUGH, HORIZONTAL_RULE, SUBSCRIPT, SUPERSCRIPT, UNDERLINE, BOLD, ITALIC, FONT_SIZE, FONT_FACE, FONT_COLOR, BACKGROUND_COLOR, ORDERED_LIST, UNORDERED_LIST, JUSTIFY_CENTER, JUSTIFY_FULL, JUSTIFY_RIGHT, JUSTIFY_LEFT } 
}

