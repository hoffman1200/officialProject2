$(document).ready(() => {
    // Getting references to our form and inputs
    const activityForm = $(".activity-info");
    const titleInput = $(".title-input");
    const descriptionInput = $(".description-input");
    const dateInput = $(".date-input");
    const addressInput = $(".address-input");

    //Event Listener when the form is submitted//
    $(activityForm).on("submit", formSubmit);

    var url = window.location.search;
    var activityId;
    var categoryId;
    var updating = false;
    
    if(url.indexOf("?activity_id=") !== -1){
        activityId = url.split("=")[1];
        getActivityData(activityId);
        console.log("id found");
    }
    else {
        console.log("id not found");
    }
    function formSubmit(event){
        event.preventDefault();
        console.log("submit", titleInput.val().trim(), descriptionInput.val().trim(), dateInput.val().trim(), addressInput.val().trim())
        if(!titleInput.val().trim() || !descriptionInput.val().trim() || !dateInput.val().trim() || !addressInput.val().trim()){
           return; 
        }
        var newActivity = {
            title: titleInput
            .val()
            .trim(),
            description: descriptionInput
            .val()
            .trim(),
            date: dateInput
            .val()
            .trim(),
            address: addressInput
            .val()
            .trim(),
        }
        console.log(newActivity);
        postActivity(newActivity);
    }
    
    
  
    /*function getActivityData(id){
        var queryUrl = "/api/activity/" + id;
        $.get(queryUrl, function(data){
            if(data){
                console.log(data)
            }
        })
    }*/

    function postActivity(newActivity){
        var queryUrl = "/api/post";
        $.post(queryUrl, newActivity, function(data){
            if(data){

            }
            console.log("Post activity", data);
        })
    }
    
  
   
});