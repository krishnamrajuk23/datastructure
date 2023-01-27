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