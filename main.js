//var username = "Ben";
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
let chatInput = document.querySelector("#newMsg");


console.log(allMessages);

watchFirebaseForChanges(
  function(msg){

      displayMessage(msg.data())
  }
);

/*
sendButton.addEventListener("click", function () {
  var msgObj = {
      dateStamp:Date.now(),
      message: chatInput.value,
      sentBy: usernameDisplay
  }
});*/

/*
function displayMessage(message){
  var messageParagraph = document.createElement("p");
  messageParagraph.innerHTML = message.dateStamp + " " + message.message + " " + message.sentBy;

  chatBox.appendChild(messageParagraph);
  chatBox.scrollTop = chatBox.scrollHeight;
}

//function makeAndDisplayMessage(message) {

  // make message
  //var newMessage = {

  //}


  // end make message

  // display message

var newMsgP = document.createElement("p");
        newMsgP.innerHTML = "<strong>" + message.sentBy + "</strong>: " + message.message;

    chatBox.appendChild(newMsgP);

    var audio = new Audio('message-tone.wav');
    audio.play();

    // Vibration upon receiving messages
    window.navigator.vibrate(200);

  // end display message


  console.log(allMessages);


document.querySelector("#sendButton").addEventListener('click', function(){

  displayMessage("me", "now", document.querySelector("#newMsg").value);

  document.querySelector("#newMsg").value = "";
  document.querySelector("#newMsg").focus();

});*/

function displayMessage(message){
  var messageParagraph = document.createElement("div");
  messageParagraph.innerHTML = message.sentBy + "     at     " + message.dateStamp + "<br>" + message.message;

  chatBox.appendChild(messageParagraph);
  chatBox.scrollTop = chatBox.scrollHeight;

  var audio = new Audio('message-tone.wav');
  audio.play();

  // Vibration upon receiving messages
  window.navigator.vibrate(200);
}

/*
watchFirebaseForChanges(
  function(msg){
      displayMessage(msg.data())
  }
);*/

sendButton.addEventListener("click", function () {
  var msgObj = {
      dateStamp: Date.now(),
      message: chatInput.value,
      sentBy: localStorage.getItem("userName")
  }

  console.log(msgObj);
  saveMessageToFirebase(msgObj);

  chatInput.value = " ";
  chatInput.focus();
});