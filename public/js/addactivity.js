$(document).ready(()=>{
    var detailsCol = $("#detailsCol")
    $(".activity-button").on("click", function(event) {
        event.preventDefault();
        console.log($(this).data("catego"));
        //console.log($(".activity-button").data("catego"));
        detailsCol.css("display", "block");
        $("#exampleInputEmail1").val($(this).data("catego"));
    });
    $("#exampleInputPassword1").datepicker({
        format: "dd/mm/yy",
        autoclose: true
    });
    var searchInput = 'search_input';
    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
        // types: ['establishment'],
    });
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var near_place = autocomplete.getPlace();
        document.getElementById('loc_lat').value = near_place.geometry.location.lat();
        document.getElementById('loc_long').value = near_place.geometry.location.lng();
        document.getElementById('latitude_view').innerHTML = near_place.geometry.location.lat();
        document.getElementById('longitude_view').innerHTML = near_place.geometry.location.lng();
    });
});