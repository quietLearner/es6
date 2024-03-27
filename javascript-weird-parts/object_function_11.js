function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }

  return newArr;
}

var arr1 = [1, 2, 3, 4, 5, 6];

console.log(arr1);

var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}

console.log(arr2);

// did exact what above code did arr2
var arr3 = mapForEach(arr1, function (item) {
  return item * 2;
});

console.log(arr3);

//check if each item greater than 2 in arr1
var arr4 = mapForEach(arr1, function (item) {
  return item > 2;
});

console.log(arr4);

var checkPassLimit = function (limiter, item) {
  return item > limiter;
};

// checkPassLimit.bind(this, 5) is the same as _checkPassLimit
var _checkPassLimit = function (item) {
  var limiter = 5;
  return item > limiter;
};

//function currying, "this" does not matter, anything works
var arr5 = mapForEach(arr1, checkPassLimit.bind(this, 3));

console.log(arr5);

//closure, even better than bind(this, limiter)
var checkPassLimitSimplified = function (limiter) {
  return function (item) {
    return item > limiter;
  };
};

var arr6 = mapForEach(arr1, checkPassLimitSimplified(3));

console.log(arr6);
