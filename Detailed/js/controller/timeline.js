timelineModule.controller("timelineController", ["$scope", "helseProblemservice", "parameterservice", "kontaktservice", "avtalerservice", "blodtrykkservice", "labservice", "sykemeldingservice", function ($scope, helseProblemservice, parameterservice, kontaktservice, avtalerservice, blodtrykkservice, labservice, sykemeldingservice) {
    var tablestart, helseProblem, parameter, tableend;


    tablestart = "<div class='timeline'><table> ";
    helseProblem = helseProblemservice.helseList($scope);
    parameter = parameterservice.parameterList($scope, kontaktservice, avtalerservice, blodtrykkservice, labservice, sykemeldingservice);
    tableend = "</table></div>";

    $scope.timelineHTML = tablestart + helseProblem + parameter + tableend;

}]);






