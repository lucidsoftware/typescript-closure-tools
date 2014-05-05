// Generated Mon May  5 11:05:46 PDT 2014

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
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/db/cursor.d.ts" />
/// <reference path="../../../closure/goog/db/index.d.ts" />
/// <reference path="../../../closure/goog/db/objectstore.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/db/transaction.d.ts" />

declare module goog.db {

    /**
     * Creates an IDBDatabase wrapper object. The database object has methods for
     * setting the version to change the structure of the database and for creating
     * transactions to get or modify the stored records. Should not be created
     * directly, call {@link goog.db.openDatabase} to set up the connection.
     *
     * @param {!IDBDatabase} db Underlying IndexedDB database object.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class IndexedDb extends goog.events.EventTarget {
        /**
         * Creates an IDBDatabase wrapper object. The database object has methods for
         * setting the version to change the structure of the database and for creating
         * transactions to get or modify the stored records. Should not be created
         * directly, call {@link goog.db.openDatabase} to set up the connection.
         *
         * @param {!IDBDatabase} db Underlying IndexedDB database object.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(db: IDBDatabase);
    
        /**
         * Closes the database connection. Metadata queries can still be made after this
         * method is called, but otherwise this wrapper should not be used further.
         */
        close(): void;
    
        /**
         * @return {boolean} Whether a connection is open and the database can be used.
         */
        isOpen(): boolean;
    
        /**
         * @return {string} The name of this database.
         */
        getName(): string;
    
        /**
         * @return {string} The current database version.
         */
        getVersion(): string;
    
        /**
         * @return {DOMStringList} List of object stores in this database.
         */
        getObjectStoreNames(): DOMStringList;
    
        /**
         * Creates an object store in this database. Can only be called inside a
         * {@link goog.db.UpgradeNeededCallback} or the callback for the Deferred
         * returned from #setVersion.
         *
         * @param {string} name Name for the new object store.
         * @param {Object=} opt_params Options object. The available options are:
         *     keyPath, which is a string and determines what object attribute
         *     to use as the key when storing objects in this object store; and
         *     autoIncrement, which is a boolean, which defaults to false and determines
         *     whether the object store should automatically generate keys for stored
         *     objects. If keyPath is not provided and autoIncrement is false, then all
         *     insert operations must provide a key as a parameter.
         * @return {!goog.db.ObjectStore} The newly created object store.
         * @throws {goog.db.Error} If there's a problem creating the object store.
         */
        createObjectStore(name: string, opt_params?: Object): goog.db.ObjectStore;
    
        /**
         * Deletes an object store. Can only be called inside a
         * {@link goog.db.UpgradeNeededCallback} or the callback for the Deferred
         * returned from #setVersion.
         *
         * @param {string} name Name of the object store to delete.
         * @throws {goog.db.Error} If there's a problem deleting the object store.
         */
        deleteObjectStore(name: string): void;
    
        /**
         * Updates the version of the database and returns a Deferred transaction.
         * The database's structure can be changed inside this Deferred's callback, but
         * nowhere else. This means adding or deleting object stores, and adding or
         * deleting indexes. The version change will not succeed unless there are no
         * other connections active for this database anywhere. A new database
         * connection should be opened after the version change is finished to pick
         * up changes.
         *
         * This is deprecated, and only supported on Chrome prior to version 25. New
         * applications should use the version parameter to {@link goog.db.openDatabase}
         * instead.
         *
         * @param {string} version The new version of the database.
         * @return {!goog.async.Deferred} The deferred transaction for changing the
         *     version.
         */
        setVersion(version: string): goog.async.Deferred;
    
        /**
         * Creates a new transaction.
         *
         * @param {!Array.<string>} storeNames A list of strings that contains the
         *     transaction's scope, the object stores that this transaction can operate
         *     on.
         * @param {goog.db.Transaction.TransactionMode=} opt_mode The mode of the
         *     transaction. If not present, the default is READ_ONLY. For VERSION_CHANGE
         *     transactions call {@link goog.db.IndexedDB#setVersion} instead.
         * @return {!goog.db.Transaction} The wrapper for the newly created transaction.
         * @throws {goog.db.Error} If there's a problem creating the transaction.
         */
        createTransaction(storeNames: string[], opt_mode?: goog.db.Transaction.TransactionMode): goog.db.Transaction;
    }
}

declare module goog.db.IndexedDb {

    /**
     * Event representing a (possibly attempted) change in the database structure.
     *
     * At time of writing, no Chrome versions support oldVersion or newVersion. See
     * http://crbug.com/153122.
     *
     * @param {number} oldVersion The previous version of the database.
     * @param {number} newVersion The version the database is being or has been
     *     updated to.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class VersionChangeEvent extends goog.events.Event {
        /**
         * Event representing a (possibly attempted) change in the database structure.
         *
         * At time of writing, no Chrome versions support oldVersion or newVersion. See
         * http://crbug.com/153122.
         *
         * @param {number} oldVersion The previous version of the database.
         * @param {number} newVersion The version the database is being or has been
         *     updated to.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(oldVersion: number, newVersion: number);
    }

    /**
     * Event types fired by a database.
     *
     * @enum {string} The event types for the web socket.
     */
    enum EventType { ABORT, CLOSE, ERROR, VERSION_CHANGE } 
}

