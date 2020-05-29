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


    // $("#saveAll").on("click", function(e) {
    //     e.preventDefault();
    //     var capsule = {
    //         capsuleName: 'capsuleName',
    //         sealedTime: '09:10:00',
    //         openTime: '09:10:00',
    //         capsuleCode: 'capsuleKey',
    //         email: 'email@email.com',
    //         password: 'password',
    //         title: "movie1",
    //         poster: "movie link",
    //         UserId: 1
    //     };

    //     $.post("api/saveCapsule", capsule);
    // });

// New capsule
var capsuleName = $("input#capName");
var sealedTime = Date.now();
var openTime = $("#datetimepicker12").data('date');
var capsuleCode = $("input#capsuleKey");
var capsuleNote = $("textarea#letter");
var capsuleData = {};
// Button to create new capsule
$("#saveAll").on("click", function(event) {
    event.preventDefault();
    newCapsuleObj();
});
// Create and fill new capsule object
function newCapsuleObj() {
    capsuleData = {
        capsuleName: capsuleName.val().trim(),
        sealedTime: sealedTime,
        openTime: openTime,
        capsuleCode: capsuleCode.val().trim(),
        note: capsuleNote.val().trim()
    };
    console.log(capsuleData);
    return capsuleData;
};









});