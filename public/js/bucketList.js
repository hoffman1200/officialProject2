$(document).ready(() => {
  // require('dotenv').config()
  
    var allAct = $("#allActivities");
    getActivityData();
    
function getActivityData(){
    var queryUrl = "/api/posts/";
    $.get(queryUrl, function(data){
        if(data){
        // console.log(data)
        data.map(i => {

            var html = `          
            <button type="button" class="cardtoDo" data-lat="${i.latitude}" data-lon="${i.longitude}">
            <p class="align-middle">
              <p>Category: ${i.category}</p>
              <p>Title: ${i.title}</p>
              <p>Description: ${i.description}</p>
              <p>Date: ${i.date}</p>
              <p>Place: ${i.searched_place}</p>
              <p>Address: ${i.address}</p>
              <p>Created At: ${i.createdAt}</p>
              <img src="assets/concerts.png" class="img-fluid float-right bucketlistImg" alt="Responsive image"/>
              </p>
              </button>
              <button type="button" class="btn btn-dark deleteBtn" data-id="${i.id}">Delete</button>
            <br />`
            allAct.prepend(html);

        })
        }
    })
};
// Initialize and add the map
function initMap(lat, lon) {
    // The location
    var uluru = {lat: lat, lng: lon};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 20, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});

  };  
  
$('body').on('click', '.cardtoDo', function (event) {
    event.preventDefault();
    var lat = $(this).data("lat");
    var lon = $(this).data("lon");
    initMap(lat, lon);
  });

  $('body').on('click', '.deleteBtn', function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.ajax("/api/posts/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("Activity Deleted");
      location.reload();
    })
  })

});

