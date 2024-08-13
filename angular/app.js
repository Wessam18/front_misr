const myapp = angular.module("myapp", [])

myapp.controller("myappcontroller", ["$scope",
    function($scope){
        $scope.users=['omar', 'ahmed', 'wessam']
    }
])
