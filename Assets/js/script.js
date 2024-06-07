// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const saveBtn = document.querySelector('.container-fluid');

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

  // Tried to do just button event delegation but because all of the buttons
  // are in separate divs I wasn't sure how to approach it. Event listens for 
  // *any* click on the page, but will only do anything for a button press.
  // Gets id of the div where the button is and sets that as the id in localStorage.
  saveBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('btn')) {
      let block = event.target.parentNode.id;
      let content = document.getElementById(block).children[1].value;
      localStorage.setItem(block, content);
    }
  })

  let currentTime = today.getHours();
  // As we iterate through the times 9-17, have l represent which timeblock is
  // to be adjusted and compare the iteration to the currentTime.
  let l = 0;
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

  // Two iterations through the correct times to pull the values from localStorage.
  for (let m = 9; m < 13; m++) {
    let id = 'hour-' + m;
    document.getElementById(id).children[1].value = localStorage.getItem(id);
  }

  for (let n = 1; n < 6; n++) {
    let id = 'hour-' + n;
    document.getElementById(id).children[1].value = localStorage.getItem(id);
  }

  //Add current date to the header
  const element = document.getElementById('currentDay');
  let datetime = today.toDateString();
  element.append(datetime);
});
