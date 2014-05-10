/// <reference path="../../../globals.d.ts" />
/// <reference path="./testcase.d.ts" />

declare module goog.testing {

    class ShardingTestCase extends __ShardingTestCase { }
    class __ShardingTestCase extends goog.testing.__TestCase {
    
        /**
         * A test case that runs tests in per-file shards.
         * @param {number} shardIndex Shard index for this page,
         *     <strong>1-indexed</strong>.
         * @param {number} numShards Number of shards to split up test cases into.
         * @extends {goog.testing.TestCase}
         * @constructor
         * @final
         */
        constructor(shardIndex: number, numShards: number, opt_name?: any /* jsdoc error */);
    }
}

declare module goog.testing.ShardingTestCase {

    /**
     * Shards tests based on the test filename. Assumes that the filename is
     * formatted like 'foo_1of5_test.html'.
     * @param {string=} opt_name A descriptive name for the test case.
     */
    function shardByFileName(opt_name?: string): void;
}
