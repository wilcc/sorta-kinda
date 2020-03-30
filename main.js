/******************
 * YOUR CODE HERE *
 ******************/

const firstNumberIsLess = function(num1, num2) {
  return num1 - num2;
}

const secondNumberIsLess = function(num1, num2) {
  return num2 - num1;
}

const trueIsFirst = function(bool1, bool2) {
  if (bool1 && !bool2) {
    return -1;
  } else if (!bool1 && bool2) {
    return 1;
  }

  return 0;
}


const firstNameIsFirstAlphabetically = function(name1, name2) {
  if (name1 < name2) {
    return -1;
  } else if (name1 > name2) {
    return 1;
  }

  return 0;
}

const firstLastNameIsFirstAlphabetically = function(name1, name2) {
  name1 = name1.slice(name1.indexOf(' ') + 1);
  name2 = name2.slice(name2.indexOf(' ') + 1);

  if (name1 < name2) {
    return -1;
  } else if (name1 > name2) {
    return 1;
  }

  return 0;
}

const truesFirst = function(bools) {
  return bools.slice().sort(trueIsFirst);
}

const sortByNumberAscending = function(nums) {
  return nums.slice().sort(firstNumberIsLess);
}

const sortByNumberDescending = function(nums) {
  return nums.slice().sort(secondNumberIsLess);
}

const sortByNameAscending = function (names) {
  return names.slice().sort(firstNameIsFirstAlphabetically);
}

const sortByLastNameAscending = function(names) {
  return names.slice().sort(firstLastNameIsFirstAlphabetically);
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof firstNumberIsLess === 'undefined') {
  firstNumberIsLess = undefined;
}

if (typeof secondNumberIsLess === 'undefined') {
  secondNumberIsLess = undefined;
}

if (typeof firstNameIsFirstAlphabetically === 'undefined') {
  firstNameIsFirstAlphabetically = undefined;
}

if (typeof firstLastNameIsFirstAlphabetically === 'undefined') {
  firstLastNameIsFirstAlphabetically = undefined;
}

if (typeof sortByNumberAscending === 'undefined') {
  sortByNumberAscending = undefined;
}

if (typeof sortByNumberDescending === 'undefined') {
  sortByNumberDescending = undefined;
}

if (typeof sortByNameAscending === 'undefined') {
  sortByNameAscending = undefined;
}

if (typeof sortByLastNameAscending === 'undefined') {
  sortByLastNameAscending = undefined;
}


module.exports = {
  firstNumberIsLess,
  secondNumberIsLess,
  firstNameIsFirstAlphabetically,
  firstLastNameIsFirstAlphabetically,
  trueIsFirst,
  sortByNumberAscending,
  sortByNumberDescending,
  sortByNameAscending,
  sortByLastNameAscending,
  truesFirst,
}
