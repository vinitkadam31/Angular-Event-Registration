'use strict';

eventsApp.filter('duration', function(){
    return function(duration){
        switch(duration)
        {
            case 1:
                return 'Half hour';
            case 2:
                return '1 hour';
            case 3:
                return 'Half Day';
            case 4:
                return 'Full Day';
        }
    }
});