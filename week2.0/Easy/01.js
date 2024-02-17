let counter = 0;
function increment() {
  counter++;
  console.log("counter", counter);
}

setInterval(increment,1000)