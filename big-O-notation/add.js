/*jshint esversion: 6 */
var now = require("performance-now")
// var can not have block scope

function addUpToV1(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }

  return total;
}

function addUpToV2(n) { return n * (n + 1) / 2; }

var t1 = now();
addUpToV1(1000000000);
var t2 = now();

console.log(`Time Elapsed with slower algorithm: ${(t2 - t1) / 1000} seconds`);

t1 = now();
addUpToV2(1000000000);
t2 = now();

console.log(`Time Elapsed with faster algorithm: ${(t2 - t1) / 1000} seconds`);
