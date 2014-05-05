// Generated Mon May  5 11:04:44 PDT 2014

/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/fs/error.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../../closure/goog/crypt/crypt.d.ts" />
/// <reference path="../../../../closure/goog/crypt/base64.d.ts" />
/// <reference path="../../../../closure/goog/testing/fs/blob.d.ts" />
/// <reference path="../../../../closure/goog/testing/fs/file.d.ts" />
/// <reference path="../../../../closure/goog/fs/entry.d.ts" />
/// <reference path="../../../../closure/goog/fs/progressevent.d.ts" />
/// <reference path="../../../../closure/goog/fs/filesaver.d.ts" />
/// <reference path="../../../../closure/goog/fs/filewriter.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/promise/resolver.d.ts" />
/// <reference path="../../../../closure/goog/testing/watchers.d.ts" />
/// <reference path="../../../../closure/goog/async/nexttick.d.ts" />
/// <reference path="../../../../closure/goog/async/run.d.ts" />
/// <reference path="../../../../closure/goog/promise/thenable.d.ts" />
/// <reference path="../../../../closure/goog/promise/promise.d.ts" />
/// <reference path="../../../../closure/goog/fs/entryimpl.d.ts" />
/// <reference path="../../../../closure/goog/testing/fs/progressevent.d.ts" />
/// <reference path="../../../../closure/goog/testing/fs/filewriter.d.ts" />
/// <reference path="../../../../closure/goog/testing/fs/entry.d.ts" />
/// <reference path="../../../../closure/goog/fs/filesystem.d.ts" />

declare module goog.testing.fs {

    /**
     * A mock filesystem object.
     *
     * @param {string=} opt_name The name of the filesystem.
     * @constructor
     * @implements {goog.fs.FileSystem}
     * @final
     */
    class FileSystem implements goog.fs.FileSystem {
        /**
         * A mock filesystem object.
         *
         * @param {string=} opt_name The name of the filesystem.
         * @constructor
         * @implements {goog.fs.FileSystem}
         * @final
         */
        constructor(opt_name?: string);
    }
}

