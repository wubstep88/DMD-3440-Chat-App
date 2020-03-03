let usernameInput = document.querySelector("#usernameInput");
let statusInput = document.querySelector("#statusInput");
let profilePicInput = document.querySelector("#profilePicInput");
let profileSaveInput = document.querySelector("#profileSaveInput");

// setting the input values default
usernameInput.value = localStorage.getItem('userName');
statusInput.value = localStorage.getItem('userStatus');

function saveProfileImageLocally() {
    if (profilePicInput.files && profilePicInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem("userProfilePic", reader.result);
        }
        reader.readAsDataURL(profilePicInput.files[0]); 
    }
}

profileSaveInput.addEventListener( 'click', function(e) {
    e.preventDefault();
    localStorage.setItem("userName", usernameInput.value);
    localStorage.setItem("userStatus", statusInput.value);
    
    saveProfileImageLocally();
});