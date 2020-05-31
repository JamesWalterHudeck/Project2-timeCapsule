$(document).ready(function() {
    $(function() {
        $('#datetimepicker12').datetimepicker({
            inline: true,
            sideBySide: true
        });
    });
    var url = window.location.href;

    if (url == "http://localhost:8080/capsuleBuilder?upload=success") {
        alert("Upload Sucessful")
    }

    $('#seelCapsule').on('click', function() {
        alert('Your capsule has been locked!');
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
    var openTime = $("#datetimepicker12");
    var capsuleCode = $("input#capsuleKey");
    var capsuleNote = $("textarea#letter");
    var capsuleData = {};
    // Button to create new capsule
    $("#saveAll").on("click", function(event) {
        event.preventDefault();
        newCapsuleObj();
        createCapsule();
    });
    // Create and fill new capsule object
    function newCapsuleObj() {
        capsuleData = {
            capsuleName: capsuleName.val().trim(),
            openTime: openTime.data('date'),
            capsuleCode: capsuleCode.val().trim(),
            note: capsuleNote.val().trim(),
            UserId: 1
        };
        return capsuleData;
    };
    // Make a post request to api/capsules with new capsule object
    function createCapsule() {
        $.post("api/saveCapsule", capsuleData)
            .then(
                console.log("capsule creation attempted")
            );
    };

    // Put for capsule sealed time hard coded for 1st capsule in table
    function seelIt(sealedTime) {
        var sealedTime = Date.now();
        $.ajax({
                method: "PUT",
                url: "api/capsules/1",
                sealedTime: sealedTime
            })
            .then(function() {
                window.location.href = "capsule";
            });
    };

    // Button to seel created capsule
    $("#seelCapsule").on("click", function(event) {
        event.preventDefault();
        seelIt();
    });
});