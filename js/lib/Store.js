var EventEmitter = require('events').EventEmitter,
    merge = require('merge');

/**
 * Creates a new store with semi-immutable state. __setState__ is the only way
 * to change state and should only be called within the store file.
 */
var Store = function (__state__, accessors) {
    /**
     * Each Store child inherits from EventEmitters prototype so they can
     * emit a CHANGE event each time they change.
     */
    var Child = Object.create(EventEmitter.prototype);

    Object.defineProperties(Child, merge({}, {
        /**
         * Method to retrieve the current immutable state.
         */
        state: {
            get: function () {
                return __state__;
            }
        },

        /**
         * This is a semi-private function that should only be called with in
         * the store file. Takes a changeState object to merge any new
         * properties or alter the old ones. Emits a CHANGE event.
         */
        __setState__: {
            value: function (changeState) {
                __state__ = Object.freeze(merge({}, __state__, changeState));

                Child.emit('CHANGE');
            }
        }
    /**
     * Accessors are passed in to retrieve view-layer data
     */
    }, accessors));

    /**
     * Make __state__ immutable so it can't be changed in the view layer
     */
    Object.freeze(__state__);

    return Child;
};

module.exports = Store;
