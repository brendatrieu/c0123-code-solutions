// Set up initial number to count down from
let currCount = 3;

// Create a function to countdown to 0
function countDown() {
  if (currCount) {
    console.log(currCount);
    return currCount--;
  } else {
    console.log('Blast off!');
    clearInterval(countId);
  }
}

// Initiate blast off
const countId = setInterval(() => countDown(currCount), 1000);
