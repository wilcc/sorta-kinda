/******************
 * YOUR CODE HERE *
 ******************/
const firstNumberIsLess = function (x,y){
  return x-y
}
const secondNumberIsLess = function (x,y){
  return y-x
}
const firstNameIsFirstAlphabetically= function(x,y){
  // if (y > x) {return -1
  // } if (x > y){
  //   return 1
  // }
  // if (y === x){
  //   return 0
  // }
  return y > x? -1 : (y < x ? 1 : 0)
}
const firstLastNameIsFirstAlphabetically = function(x,y){
    const xLastName = x.slice(x.indexOf(' ')+1)
    const yLastName = y.slice(y.indexOf(' ')+1)
  //   if (xLastName > yLastName){
  //     return 1
  //   }if (xLastName < yLastName) {
  //   return -1;
  // } else {
  //   return 0;
  // }
  return xLastName > yLastName ? 1 :(xLastName < yLastName ? -1 : 0)
}
const trueIsFirst = function(first,second){
  if (first === true && second ===false){
    return -1
  } if (first === false && second === true){
    return 1
  }else return 0
}

/************************
// ITERATION FUNCTIONS
 ************************/
const sortByNumberAscending = function(array){
  return array.slice().sort()
}

const sortByNumberDescending = function(array){
  return array.slice().sort(secondNumberIsLess)
}

const truesFirst = function(array){
  return array.slice().sort(trueIsFirst)
}
const sortByNameAscending = function(array){
  return array.slice().sort()
}
const sortByLastNameAscending = function(array){
  return array.slice().sort(firstLastNameIsFirstAlphabetically)
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

if (typeof trueIsFirst === 'undefined') {
  trueIsFirst = undefined;
}

if (typeof truesFirst === 'undefined') {
  truesFirst = undefined;
}


module.exports = {
  firstNumberIsLess,
  secondNumberIsLess,
  firstNameIsFirstAlphabetically,
  firstLastNameIsFirstAlphabetically,
  trueIsFirst,
  truesFirst,
  sortByNumberAscending,
  sortByNumberDescending,
  sortByNameAscending,
  sortByLastNameAscending,
  truesFirst,
}
