"use strict";

function getNegative(num) {
  if (num === null || num === undefined) {
    throw "input must be coercible to a number";
  }
  return num * -1;
}
