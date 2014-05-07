/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/db/error.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/promise/resolver.d.ts" />
/// <reference path="../../../closure/goog/testing/watchers.d.ts" />
/// <reference path="../../../closure/goog/async/nexttick.d.ts" />
/// <reference path="../../../closure/goog/async/run.d.ts" />
/// <reference path="../../../closure/goog/promise/thenable.d.ts" />
/// <reference path="../../../closure/goog/promise/promise.d.ts" />
/// <reference path="../../../third_party/closure/goog/mochikit/async/deferred.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/db/cursor.d.ts" />
/// <reference path="../../../closure/goog/db/index.d.ts" />

declare module goog.db {

    /**
     * Creates an IDBObjectStore wrapper object. Object stores have methods for
     * storing and retrieving records, and are accessed through a transaction
     * object. They also have methods for creating indexes associated with the
     * object store. They can only be created when setting the version of the
     * database. Should not be created directly, access object stores through
     * transactions.
     * @see goog.db.IndexedDb#setVersion
     * @see goog.db.Transaction#objectStore
     *
     * @constructor
     * @param {!IDBObjectStore} store The backing IndexedDb object.
     *
     * TODO(user): revisit msg in exception and errors in this class. In newer
     *     Chrome (v22+) the error/request come with a DOM error string that is
     *     already very descriptive.
     * @final
     */
    class ObjectStore {
        /**
         * Creates an IDBObjectStore wrapper object. Object stores have methods for
         * storing and retrieving records, and are accessed through a transaction
         * object. They also have methods for creating indexes associated with the
         * object store. They can only be created when setting the version of the
         * database. Should not be created directly, access object stores through
         * transactions.
         * @see goog.db.IndexedDb#setVersion
         * @see goog.db.Transaction#objectStore
         *
         * @constructor
         * @param {!IDBObjectStore} store The backing IndexedDb object.
         *
         * TODO(user): revisit msg in exception and errors in this class. In newer
         *     Chrome (v22+) the error/request come with a DOM error string that is
         *     already very descriptive.
         * @final
         */
        constructor(store: IDBObjectStore);
    
        /**
         * @return {string} The name of the object store.
         */
        getName(): string;
    
        /**
         * Adds an object to the object store. Replaces existing objects with the
         * same key.
         *
         * @param {*} value The value to put.
         * @param {IDBKeyType=} opt_key The key to use. Cannot be used if the
         *     keyPath was specified for the object store. If the keyPath was not
         *     specified but autoIncrement was not enabled, it must be used.
         * @return {!goog.async.Deferred} The deferred put request.
         */
        put(value: any, opt_key?: any): goog.async.Deferred<any>;
    
        /**
         * Adds an object to the object store. Requires that there is no object with
         * the same key already present.
         *
         * @param {*} value The value to add.
         * @param {IDBKeyType=} opt_key The key to use. Cannot be used if the
         *     keyPath was specified for the object store. If the keyPath was not
         *     specified but autoIncrement was not enabled, it must be used.
         * @return {!goog.async.Deferred} The deferred add request.
         */
        add(value: any, opt_key?: any): goog.async.Deferred<any>;
    
        /**
         * Removes an object from the store. No-op if there is no object present with
         * the given key.
         *
         * @param {IDBKeyType} key The key to remove objects under.
         * @return {!goog.async.Deferred} The deferred remove request.
         */
        remove(key: any): goog.async.Deferred<any>;
    
        /**
         * Gets an object from the store. If no object is present with that key
         * the result is {@code undefined}.
         *
         * @param {IDBKeyType} key The key to look up.
         * @return {!goog.async.Deferred} The deferred get request.
         */
        get(key: any): goog.async.Deferred<any>;
    
        /**
         * Gets all objects from the store and returns them as an array.
         *
         * @param {!goog.db.KeyRange=} opt_range The key range. If undefined iterates
         *     over the whole object store.
         * @param {!goog.db.Cursor.Direction=} opt_direction The direction. If undefined
         *     moves in a forward direction with duplicates.
         * @return {!goog.async.Deferred} The deferred getAll request.
         */
        getAll(opt_range?: goog.db.KeyRange, opt_direction?: goog.db.Cursor.Direction): goog.async.Deferred<any>;
    
        /**
         * Opens a cursor over the specified key range. Returns a cursor object which is
         * able to iterate over the given range.
         *
         * Example usage:
         *
         * <code>
         *  var cursor = objectStore.openCursor(goog.db.Range.bound('a', 'c'));
         *
         *  var key = goog.events.listen(
         *      cursor, goog.db.Cursor.EventType.NEW_DATA, function() {
         *    // Do something with data.
         *    cursor.next();
         *  });
         *
         *  goog.events.listenOnce(
         *      cursor, goog.db.Cursor.EventType.COMPLETE, function() {
         *    // Clean up listener, and perform a finishing operation on the data.
         *    goog.events.unlistenByKey(key);
         *  });
         * </code>
         *
         * @param {!goog.db.KeyRange=} opt_range The key range. If undefined iterates
         *     over the whole object store.
         * @param {!goog.db.Cursor.Direction=} opt_direction The direction. If undefined
         *     moves in a forward direction with duplicates.
         * @return {!goog.db.Cursor} The cursor.
         * @throws {goog.db.Error} If there was a problem opening the cursor.
         */
        openCursor(opt_range?: goog.db.KeyRange, opt_direction?: goog.db.Cursor.Direction): goog.db.Cursor;
    
        /**
         * Deletes all objects from the store.
         *
         * @return {!goog.async.Deferred} The deferred clear request.
         */
        clear(): goog.async.Deferred<any>;
    
        /**
         * Creates an index in this object store. Can only be called inside the callback
         * for the Deferred returned from goog.db.IndexedDb#setVersion.
         *
         * @param {string} name Name of the index to create.
         * @param {string} keyPath Attribute to index on.
         * @param {!Object=} opt_parameters Optional parameters object. The only
         *     available option is unique, which defaults to false. If unique is true,
         *     the index will enforce that there is only ever one object in the object
         *     store for each unique value it indexes on.
         * @return {!goog.db.Index} The newly created, wrapped index.
         * @throws {goog.db.Error} In case of an error creating the index.
         */
        createIndex(name: string, keyPath: string, opt_parameters?: Object): goog.db.Index;
    
        /**
         * Gets an index.
         *
         * @param {string} name Name of the index to fetch.
         * @return {!goog.db.Index} The requested wrapped index.
         * @throws {goog.db.Error} In case of an error getting the index.
         */
        getIndex(name: string): goog.db.Index;
    
        /**
         * Deletes an index from the object store. Can only be called inside the
         * callback for the Deferred returned from goog.db.IndexedDb#setVersion.
         *
         * @param {string} name Name of the index to delete.
         * @throws {goog.db.Error} In case of an error deleting the index.
         */
        deleteIndex(name: string): void;
    
        /**
         * Gets number of records within a key range.
         *
         * @param {!goog.db.KeyRange=} opt_range The key range. If undefined, this will
         *     count all records in the object store.
         * @return {!goog.async.Deferred} The deferred number of records.
         */
        count(opt_range?: goog.db.KeyRange): goog.async.Deferred<any>;
    }
}

