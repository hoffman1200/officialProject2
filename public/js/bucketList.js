$(document).ready(() => {
  // require('dotenv').config()
  
    var allAct = $("#allActivities");
    //getActivityTitles();
    
/*function getActivityTitles(){
    var queryUrl = "/api/posts/";
    $.get(queryUrl, function(data){
        if(data){
        // console.log(data)
        data.map(i => {


            var html = `
            <div class="col-lg-5 col-sm-12 activityInfo">
            <button class="card toDo" data-id="${i.id}">
              <p class="activities-title">${i.title}</p></button>
            </div>

            allAct.prepend(html);

        })
        }
    })
};*/

$('.toDo').on('click', function (event) {
  event.preventDefault();
  var id = $(this).data("id");
  var activityDiv = $('.activityDetails');
  console.log(id);
  activityDiv.each(function(i, ac) {
    if(this.attributes["data-ide"].value == id){
      $(this).css('display', 'block');
      console.log("hola")
    }
    else {
      $(this).css('display', 'none');
    }
    console.log(this.attributes["data-ide"].value, id)

  })
  /*if(activityDiv.data(id) === id) {
    
  }*/
  //getActivityData();

});

/*function getActivityData(){
  var queryUrl = "/api/posts/";
  $.get(queryUrl, function(data){
      if(data){
      // console.log(data)
      data.map(i => {

          var html = `
          <div class="col-lg-5 col-sm-12 activityInfo">
            <p class="details-catego"> Category: ${i.category}</p>
            <p class="details-title">${i.title}</p>
            <p class="description">${i.description}</p>
            <p class="dateInfo">${i.date}</p>
            <p class="place">${i.searched_place}</p>
            <p class="createdAt">Created At: ${i.createdAt}</p>
            <button type="submit" class="btn btn-primary view-map" data-lat="${i.latitude}" data-lon="${i.longitude}">View Map</button>
            <button type="button" class="btn btn-primary deleteBtn" data-id="${i.id}">Delete</button>
          </div>
          `
          allAct.prepend(html);

      })
      }
  })
};*/
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
  
  $('body').on('click', '.view-map', function (event) {
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

