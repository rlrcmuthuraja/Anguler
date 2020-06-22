dateModule.controller('dateCtrl', function ($scope, $filter) {
    $scope.dates2 = { startDate: moment('2013-09-20'), endDate: moment('2013-09-25') };
    $scope.dates3 = { startDate: moment(), endDate: moment().add(1, 'day') };
    $scope.dates4 = { startDate: moment().subtract(1, 'day'), endDate: moment().subtract(1, 'day') };
    $scope.ranges = {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
        'Last 7 days': [moment().subtract('days', 7), moment()],
        'Last 30 days': [moment().subtract('days', 30), moment()],
        'This month': [moment().startOf('month'), moment().endOf('month')]
    };
});
