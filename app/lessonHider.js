angular.module('directivePractice')
.directive('lessonHider', function(){


  return {
    restrict: 'E',
    templateUrl: 'app/view/lessonHider.html',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function(scope, element, attributes) {
      // console.log(scope, element, attributes)
        scope.getSchedule.then(function(response) {
          scope.schedule = response.data;

          scope.schedule.forEach(function(scheduleDay) {
            if (scheduleDay.lesson === scope.lesson) {
              scope.lessonDay = scheduleDay.weekday;
              element.css('text-decoration', 'line-through');
              return;
            }
          });
        });


    }
  }
})
