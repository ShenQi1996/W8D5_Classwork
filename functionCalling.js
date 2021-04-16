// Function.prototype.myBind = function (cb) {
//   return function () {
//     this.apply(cb);
//   };
// };

Function.prototype.myBind = function (newthis) {
  let bindtargetfunction = this;
  return function bindfunction() {
    return bindtargetfunction.apply(newthis);
  };
};

// Function.prototype.myBind = (cb, ...args) => {
//   return function (...finalArg) {
//     return this.apply(cb, args.concat(finalArg));
//   };
// };

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
