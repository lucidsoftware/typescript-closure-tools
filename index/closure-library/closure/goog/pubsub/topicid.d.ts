/// <reference path="../../../globals.d.ts" />

declare module goog.pubsub {

    class TopicId<PAYLOAD> extends __TopicId<PAYLOAD> { }
    class __TopicId<PAYLOAD> {
    
        /**
         * A templated class that is used to register {@code goog.pubsub.PubSub}
         * subscribers.
         *
         * Typical usage for a publisher:
         * <code>
         *   /** @type {!goog.pubsub.TopicId.<!zorg.State>}
         *   zorg.TopicId.STATE_CHANGE = new goog.pubsub.TopicId(
         *       goog.events.getUniqueId('state-change'));
         *
         *   // Compiler enforces that these types are correct.
         *   pubSub.publish(zorg.TopicId.STATE_CHANGE, zorg.State.STARTED);
         * </code>
         *
         * Typical usage for a subscriber:
         * <code>
         *   // Compiler enforces the callback parameter type.
         *   pubSub.subscribe(zorg.TopicId.STATE_CHANGE, function(state) {
         *     if (state == zorg.State.STARTED) {
         *       // Handle STARTED state.
         *     }
         *   });
         * </code>
         *
         * @param {string} topicId
         * @template PAYLOAD
         * @constructor
         * @final
         * @struct
         */
        constructor(topicId: string);
    }
}
