//var initialMessages = getAllMessagesFromFirebase();
//console.log(initialMessages);

var username = "Ben";
var chatLog = document.querySelector("#chatLog");
var inputBox = document.querySelector("#inputBox");
var sendButton = document.querySelector("#sendButton");
var profilePicInput = document.querySelector("#profilePic");
var saveProfileButton = document.querySelector("#saveProfile");
var profilePicDisplayElement = document.querySelector("#profilePicDisplay");
var profilePic = localStorage.getItem("userProfilePic") || "unknown.jpg";
//var saveProfileButton = 

var testMessage = {
    dateStamp:"123874682376",
    message:"hello test!",
    sentBy: "Ben"
}

profilePicDisplayElement.src = profilePic;

function saveProfileImageLocally() {
    if (profilePicInput.files && profilePicInput.files[0]){
        var reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem("userProfilePic", reader.result);
        }
        reader.readAsDataURL(profilePicInput.files[0]);
    }
}

function displayMessage(message){
    var messageParagraph = document.createElement("p");
    messageParagraph.innerHTML = message.dateStamp + " " + message.message + " " + message.sentBy;

    chatLog.appendChild(messageParagraph);
    chatLog.scrollTop = chatLog.scrollHeight;
}

watchFirebaseForChanges(
    function(msg){
        displayMessage(msg.data())
    }
);

sendButton.addEventListener("click", function () {
    var msgObj = {
        dateStamp:Date.now(),
        message: inputBox.value,
        sentBy: username
    }

    saveMessageToFirebase(msgObj);

    inputBox.value = " ";
    inputBox.focus();
});

saveProfileButton.addEventListener("click", function() {
    saveProfileImageLocally();
});