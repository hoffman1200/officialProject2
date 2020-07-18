$(document).ready(() => {
    // Getting references to our form and inputs
    const activityInfo = $(".activityInfo");
    const titleInfo = $(".titleInfo");
    const descriptionInfo = $(".descriptionInfo");
    const dateInfo = $(".dateInfo");
    const hourInfo = $(".hourInfo");
    const addressInfo = $(".addressInfo");
    const toDo = $(".toDo")
//Event Listener when the button is clicked//
    $(activityInfo).on("submit", getActivityData);
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
function getActivityData(id){
    var queryUrl = "/api/activity/" + id;
    $.get(queryUrl, function(data){
        if(data){
        console.log(data)
        }
    })
};
});