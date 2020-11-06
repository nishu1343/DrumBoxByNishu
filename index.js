//it finds the 1st button in our document which is the w drum button and then adds an event listener to that button so that it listens to the clicks that happen to that button and when it does,it runs the code inside that function 'handleClick'.
//QuerySelector will only select the first button in our index.html
//instead of handleClick(), we pass handleClick bcoz we are waiting for the click event to happen, instead of passing the whole function.

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got Clicked");
// }

//to do for all of the buttons.we have to do it 7 times for 7 buttons.
//for that document.querySelectorAll("button").
//but if later on we decide to add another button for example twitter etc,this loop will also loop through that button.
//Instead target all the elements that have a selector .drum. so we are specifying that class and call length.This number will tell us when we shud stop looping

//for(var i = 0; i< document.querySelectorAll(".drum").length)

//we can also place this line in a seperate variable to make it clear

//This section Detects the button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  //Instead of this , we can also do it in anonymous function way,which wud have no name.
  //query for all of the selectors that have the class 'drum' and select each individual element from this array.start of with [0], so put [i] as it loops all the numbers
  //Now all button clicks will get the alert message when clicked

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //console.log(this) will print out the inner html of the button that triggered the click event every single time we click on a new button.like
    //w
    //a ..so on
    //console.log(this);
    //when ever we click on a button,this line of code changes the text color
    //console.log((this.style.color = "white"));

    //'this' is the button that will trigger the event

    //if a button was pressed,check the innerhtml of the button that got pressed and send that to makesound to play the relevant sound
    var buttonInnerHTML = this.innerHTML;
    //this is the innerhtml of the button that got pressed
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}
//This section Detects Keyboard Press

//Add an event listener to the entire document,so the entire web page starts listening for keyboard strokes
//if there was a key press,call an anonymous f/n
//if a key press is detected instead,then send the event.key.the key property of the event
addEventListener("keypress", function (event) {
  //logs the keyboard events that trigger the event listener.that event tells which key was pressed
  //console.log(event);

  makeSound(event.key);

  buttonAnimation(event.key);
});
//Create a function that takes a character that checks it against the switch statement inorder to play the correct sound and then call it inside the evnt listener for the key press as well as the event listener for our drum button
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      //after break,it tells the switch statement to exit and execute the rest of the code
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    //default is like an else statement.if the buttonInnerHTML is not w,s,d...and some otehr character,then default comes.lets log the buttonInnerHTML the triggered the default case
    default:
      console.log(buttonInnerHTML);
  }
}

//Animation
//We want to animate the buttons both when the button is pressed and aswell as the keyboard gets pressed.
function buttonAnimation(currentKey) {
  //we need to concatenate a fullstop in addition ti the currentkey(that got pressed),so that we have in this format(document.querySelector(".w"));
  //This is the button that will change its style.You can check the class "pressed" in styles.css
  var activeButton = document.querySelector("." + currentKey);
  //we need to apply style to the 'activeButton' element. add the class "pressed".Now if you press the button,the transparancy and shhadow will be applied to that button
  activeButton.classList.add("pressed");
  //after a delay of some time, we want this class to be removed again so that it goes back to its original state,else the button will be still transparent. and the 2nd parameter is the amount of time we wait before we run this function
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

//We shud also assign each of these buttons a background image using css

//document.querySelectorAll- grabs all the elements that have a class 'drum'
//next we loop through all of the elements
//and we add an event listener to it and the next time we loop through,then i becomes 1 and next we add the event listener to the 2nd one.this goes on
