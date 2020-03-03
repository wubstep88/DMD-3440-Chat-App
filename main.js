// Register a service worker, this one located in serviceworker.js
// A service worker is a piece of code the browser runs behind the scenes.
if ('serviceWorker' in navigator) {
  console.log('CLIENT: service worker registration in progress.');
  navigator.serviceWorker.register('sw.js').then(function() {
    console.log('CLIENT: service worker registration complete.');
  }, function() {
    console.log('CLIENT: service worker registration failure.');
  });
} else {
  console.log('CLIENT: service workers are not supported.');
}

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

    // Play message received tone

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