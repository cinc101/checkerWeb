/**
 * Created by cdchenjia on 2016/7/12.
 */
'use strict';

let test = function() {}

test.prototype.dosomething = function() {
    alert(1);
};

module.exports = new test();