$(document).ready(function() {
    $(function() {
        $('#datetimepicker12').datetimepicker({
            inline: true,
            sideBySide: true
        });
    });

    // New User
    var userEmail = $("input#userEmail");
    var userPassword = $("input#userPassword");
    var loginBtn = $("button#accountlogin");
    var userData = {};
    // Button to Create new user
    $(loginBtn).on("click", function(event) {
        event.preventDefault();
        // Makes user object
        newUserObj();
        // Makes post request sending object/then redirects to capsule page
        createUser();
    });

    // Create and fill new user object
    function newUserObj() {
        userData = {
            email: userEmail.val().trim(),
            password: userPassword.val().trim()
        };
        console.log(userData);
        return userData;
    };

    // Make a post request to api/users with new user object
    function createUser() {
        $.post("api/users", userData)
            .then(capsulePage);
    };

    // Redirect from login to capsule page
    function capsulePage() {
        window.location.href = 'capsule';
    };

// New capsule
var capsuleName = $("input#capName");
var sealedTime = Date.now();
var openTime = $("#datetimepicker12").data('date');
var capsuleCode = $("input#capsuleKey");
var capsuleNote = $("textarea#letter");
var userId;
var capsuleData = {};
// Button to create new capsule
$("#saveAll").on("click", function(event) {
    event.preventDefault();
    getUserId();
    createCapsule();
});
// Create and fill new capsule object
function newCapsuleObj() {
    capsuleData = {
        capsuleName: capsuleName.val().trim(),
        // sealedTime: sealedTime,
        openTime: openTime,
        capsuleCode: capsuleCode.val().trim(),
        note: capsuleNote.val().trim(),
        UserId: userId
    };
    console.log(capsuleData);
    return capsuleData;
};
// Make a post request to api/capsules with new capsule object
function createCapsule() {
    $.post("api/saveCapsule", capsuleData)
        .then(console.log("capsule creation attempted"));
};
// Get user id - sadly hardcoded to the first user
function getUserId() {
    $.get("api/users/1", function(data){
        userId = data.id;
        console.log(userId);
        newCapsuleObj();
        return userId;
    });
    }

});