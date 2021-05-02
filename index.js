var parent = function () {
  console.log("parent() is called.");
  child();
  console.log("parent() is executed.");
};

var child = function () {
  console.log("child() is called.");
  console.log("child() is executed.");
};

parent();


let score = 40;
console.log(score);
