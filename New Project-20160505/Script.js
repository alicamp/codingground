(function (){
    
var app = angular
        .module("myModule", [])
        .filter('gender', function(){
            return function (gender){
            switch(gender){
             case 1 : return "male";  
             case 2 : return "female";
             case 3 : return "not disclosed";
            }
        };
        })
        
        .controller("myController", function ($scope) { 
            $scope.employees = employees;
            $scope.rowCount = 3;
        })
        
        .controller("my2Controller", function ($scope) {
            $scope.employees = employees1;
            $scope.search = function (item) {
                if ($scope.searchText === undefined) {
                    return true;
                }
                else {
                    if (item.city.toLowerCase()
                                 .indexOf($scope.searchText.toLowerCase()) != -1 ||
                        item.name.toLowerCase()
                                 .indexOf($scope.searchText.toLowerCase()) != -1) {
                        return true;
                    }
                }
                return false;
            };
        })
        
        .controller("my1Controller", function ($scope) { 
            $scope.employees = employees1;
        });
        
        var employees1 = [
                { name: "Ben", gender: 1, salary: 55000, city: "London" },
                { name: "Sara", gender: 2, salary: 68000, city: "Chennai" },
                { name: "Mark", gender: 1, salary: 57000, city: "London" },
                { name: "Pam", gender: 2, salary: 53000, city: "Chennai" },
                { name: "Todd", gender: 1, salary: 60000, city: "London" },
            ];
            
         var employees = [
                {
                    name: "Ben", dateOfBirth: new Date("November 23, 1980"),
                    gender: "Male", salary: 55000.788
                },
                {
                    name: "Sara", dateOfBirth: new Date("May 05, 1970"),
                    gender: "Female", salary: 68000
                },
                {
                    name: "Mark", dateOfBirth: new Date("August 15, 1974"),
                    gender: "Male", salary: 57000
                },
                {
                    name: "Pam", dateOfBirth: new Date("October 27, 1979"),
                    gender: "Female", salary: 53000
                },
                {
                    name: "Todd", dateOfBirth: new Date("December 30, 1983"),
                    gender: "Male", salary: 60000
                }
            ];
})();