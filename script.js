/**
 * Create elements
 */
// Header


// add elements to header


// keyboard interface
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let buttons = document.querySelector('#buttons');
let letters = document.createElement('ul');
let wordsOfChoice = ['golf', "basketball", "baseball", "swimming", "vollyball", "tennis", "soccer", "football", "snowboarding"];
let wordChoosen = wordsOfChoice[Math.floor(Math.random() * wordsOfChoice.length)];
// console.log(wordChoosen);
randomWord = wordChoosen.split('');
console.log(randomWord);
let fieldForCorrectWord = document.querySelector('#fieldForCorrectWord');
let guesses = document.createElement('ul');
guesses.classList.add('guesses');
fieldForCorrectWord.appendChild(guesses);
let counter = 7;
function getWordPosition(letter) {
      let letterPosition = [];
      for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] == letter) {
                  letterPosition.push(i);
            }
      }
      // document.querySelectorAll(".guess");

      let li = document.querySelectorAll(".guess");
      console.log(li, letter, letterPosition);
      for (i = 0; i < letterPosition.length; i++) {
            li[letterPosition[i]].innerText = letter;

      }
      return letterPosition;
}

for (i = 0; i < randomWord.length; i++) {
      // console.log("t");
      let guess = document.createElement('li');
      guess.classList.add('guess');
      guesses.appendChild(guess);
      guess.innerHTML = "_";

};
for (let i = 0; i < alphabet.length; i++) {
      letters.classList.add('letters');
      let list = document.createElement('li');
      list.classList.add('list');
      list.innerHTML = alphabet[i];
      buttons.appendChild(letters);
      letters.appendChild(list);
      list.addEventListener("click", function (e) {
            let letter = e.target.innerHTML;
            console.log(e.target.innerHTML);
            list.style.background = "red";
            if (randomWord.includes(letter, -100)) {

                  getWordPosition(letter);
                  list.style.background = "blue";

            }
            else {
                  counter--;
                  console.log(counter);
                  if (counter == 6) {
                        document.querySelector('#hangTime211').style.opacity = "1";
                  }
                  if (counter == 5) {
                        document.querySelector('#hangTime311').style.opacity = "1";
                  }
                  if (counter == 4) {
                        document.querySelector('#hangTime411').style.opacity = "1";
                  }
                  if (counter == 3) {
                        document.querySelector('#hangTime412').style.opacity = "1";
                  }
                  if (counter == 2) {
                        document.querySelector('#hangTime413').style.opacity = "1";
                  }
                  if (counter == 1) {
                        document.querySelector('#hangTime512').style.opacity = "1";
                  }

                  if (counter == 0) {
                        letters.style.opacity = "0";
                        document.querySelector('#hangTime513').style.opacity = "1";
                        // confirm("This is an Confirm Dialog");



                  }
            }



      });
};

let reset = document.querySelector('#reset');
reset.addEventListener('click', function () {
      console.log("hello");
      location.reload();
});



// inputfield for correct letters to go in//




// Use API to create menu items

      // stop at numbers.
