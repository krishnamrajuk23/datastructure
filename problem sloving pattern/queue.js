var Queue = function () {
  this.storage = {};
};

Queue.prototype.enqueue = function (key, value) {
  this.storage[key] = value;
};

Queue.prototype.dequeue = function () {
  const first = Object.keys(this.storage)[0];
  delete this.storage[first];
};

Queue.prototype.size = function () {
  return this.storage;
};

var myWeeklyMenu = new Queue();

myWeeklyMenu.enqueue("name", "raju");
myWeeklyMenu.dequeue();

console.log(this.storage);