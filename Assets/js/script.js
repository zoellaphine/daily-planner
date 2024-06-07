// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  let today = new Date();

  // Create array with timeblock divs.
  let timeBlocks = [];
  for (let i = 9; i < 13; i++) {
    timeBlocks.push(document.getElementById('hour-' + i));
  }
  for (let j = 1; j < 6; j++) {
    timeBlocks.push(document.getElementById('hour-' + j));
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  let currentTime = today.getHours();
  // As we iterate through the times 9-17, have l represent which timeblock is
  // to be adjusted and compare the iteration to the currentTime.
  let l = 0;
  console.log(currentTime);
  for (let k = 9; k < 18; k++) {
    if (k == currentTime) {
      timeBlocks[l].classList.add('present');
    } else if (k < currentTime) {
      timeBlocks[l].classList.add('past');
    } else {
      timeBlocks[l].classList.add('future')
    }
    l++;
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //Add current date to the header
  const element = document.getElementById('currentDay');
  let datetime = today.toDateString();
  element.append(datetime);
});
