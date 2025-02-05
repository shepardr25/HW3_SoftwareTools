/*
Author: Ruth Shepard
Class: Software Engineering
Assignment: HW 3
*/

const sum = require('../public/javascripts/sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
