$(document).ready(function() {
    $(function() {
        $('#datetimepicker12').datetimepicker({
            inline: true,
            sideBySide: true
        });
    });

    $("#saveAll").on("click", function(e) {
        e.preventDefault();
        var data_array = $("form").map(function() {
            console.log($(this).serializeArray())
            return $(this).serializeArray();
        });
        $.ajax({
            url: 'api/capsuleSave',
            data: data_array,
            success: function(html) {

            }
        });
    });
});