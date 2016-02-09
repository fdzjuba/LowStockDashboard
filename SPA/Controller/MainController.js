var MainController = function ($scope) {
    $scope.models = {
        locations: [
                        { id: "1", Location: "UK Warehouse" },
                        { id: "2", Location: "Asian Distribution" },
                        { id: "3", Location: "US Fulfilment" },
        ]
    };
    $scope.selectedLocation = $scope.models.locations[0];

    $scope.changeLocation = function (loc) {
        $scope.selectedLocation = loc;
    }
}

MainController.$inject = ['$scope'];