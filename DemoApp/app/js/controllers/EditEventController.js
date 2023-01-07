eventsApp.controller("EditEventController", function($scope, eventData){
$scope.saveEvent = function(event, newEventForm){
    if(newEventForm.$valid){
        eventData.save(event)
            .$promise.then(
                function(response){
                    window.alert("New event " + event.name + " saved successfully");
                    console.log('success', response);
                    window.location = "/#/events";
                },
                function(error){
                    console.log('error', error);
                }
            );
        
        
    }
};

$scope.cancelEdit = function(){
    window.location = "/#/events";
}

});