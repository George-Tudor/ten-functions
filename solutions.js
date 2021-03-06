"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(anyInput) {
    if(anyInput === true) {
        return true;
    } else {
        return false;
    }
}

function isFalse(value) {
    if(value === false) {
        return true;
    } else {
        return false;
    }
}

function not(anyInput) {
    if(Boolean(anyInput) === true) {
        return false;
    } else {
        return true;
    }
}