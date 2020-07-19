$(document).ready(()=>{
    $("#submitBtn").on("click", function(event){
        event.preventDefault()
        var category = $("#category").val().trim();
        var title = $("#title").val().trim();   
        var description = $("#description").val().trim();
        var date = $("#date").val().trim();
        var search = $("#search_input").val().trim();
        var address = $("#address_view").text().trim();
        var lat = $("#latitude_view").text().trim();
        var lon = $("#longitude_view").text().trim();

        console.log(category);
        console.log(title);
        console.log(description);
        console.log(date);
        console.log(search);
        console.log(address);
        console.log(lat);
        console.log(lon);

        var newActivity = {
            category: category,
            title: title,
            description: description,
            date: date,
            searched_place: search,
            address: address,
            latitude: lat,
            longitude: lon
        }

        console.log(newActivity);
        postActivity(newActivity);
        
    });
function postActivity(newActivity) {
    var queryUrl = "/api/posts";
    $.post(queryUrl, newActivity, function(data){
        console.log("New post data: ", data);
        window.location.href = "/bucketlist"
    })
}


})