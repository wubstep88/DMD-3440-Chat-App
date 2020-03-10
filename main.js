document.querySelector("#usernameDisplay").innerHTML = localStorage.getItem("userName");
document.querySelector("#userStatusDisplay").innerHTML = localStorage.getItem("userStatus");
document.querySelector("#userProfilePicDisplay").src = localStorage.getItem("userProfilePic");


var sampleMessage = {
  sentBy:"Ben",
  dateStamp:"02/20/2020 at 2:49",
  text:"Hello, this is a new message."
}

let allMessages = [];
let chatBox = document.querySelector("#chatBox");

console.log(allMessages);

function makeAndDisplayMessage(sender, dateStamp, text) {

  // make message
  var newMessage = {
    sentBy: sender,
    dateStamp: dateStamp,
    text: text
  }

  allMessages.push(newMessage);
  // end make message

  // display message

    var newMsgP = document.createElement("p");
        newMsgP.innerHTML = "<strong>" + sender + "</strong>: " + text;

    chatBox.appendChild(newMsgP);

    var audio = new Audio('message-tone.wav');
    audio.play();

    // Vibration upon receiving messages
    window.navigator.vibrate(200);

  // end display message


  console.log(allMessages);
}

document.querySelector("#sendBtn").addEventListener('click', function(){

  makeAndDisplayMessage("me", "now", document.querySelector("#newMsg").value);

  document.querySelector("#newMsg").value = "";
  document.querySelector("#newMsg").focus();

});