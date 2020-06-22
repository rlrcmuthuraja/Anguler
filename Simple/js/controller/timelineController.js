app.controller("timelineController", ["$scope", "periodselectionservice", "helseProblemservice", "parameterservice", "kontaktservice", "avtalerservice", "blodtrykkservice", "labservice", "sykemeldingservice", function ($scope, periodselectionservice, helseProblemservice, parameterservice, kontaktservice, avtalerservice, blodtrykkservice, labservice, sykemeldingservice) {
    var period, tablestart, helseProblem, parameter, tableend;

    period = periodselectionservice.selectionButtons($scope);
    tablestart = "<div class='timeline'><table> ";
    helseProblem = helseProblemservice.helseList($scope);
    parameter = parameterservice.parameterList($scope, kontaktservice, avtalerservice, blodtrykkservice, labservice, sykemeldingservice);
    tableend = "</table></div>";
    
    $scope.timelineHTML = period + tablestart + helseProblem + parameter + tableend;
    
}]);