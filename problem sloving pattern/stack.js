/*Stack with string example*/

var Stack = function () {
  this.storage = "";
};

Stack.prototype.push = function (val) {
  this.storage = this.storage.concat("***", val);
};

Stack.prototype.pop = function () {
  const lastIndex = this.storage.lastIndexOf("***");
  // getting the last index removed text
  const str = this.storage.slice(lastIndex)
  console.log(str, lastIndex)
  // assign the new value to the storage;
  this.storage = this.storage.substring(0, lastIndex)
  return str;

};

Stack.prototype.size = function () {
  return this.storage.length;
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("RedBeans");



/*Stack with object example*/

var StackWithObj = function (capacity) {
  this.storage = {};
  this.count = 0;
  this.capacity = capacity || Infinity;
}

StackWithObj.push = function (value) {
  if (this.count <= this.capacity) {
    this.storage[this.count++] = value;
  }

  throw new Error("stack is fill you can't push more than capacity");
}

StackWithObj.pop = function () {
  if (this.count !== 0) {
    delete this.storage[--this.count];
  }
  throw new Error("stack is empty");
}

