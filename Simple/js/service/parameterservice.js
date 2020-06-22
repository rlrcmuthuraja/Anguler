app.factory("parameterservice", function () {


    return {
        parameterList: function ($scope, kontaktservice, avtalerservice, blodtrykkservice, labservice, sykemeldingservice) {

            return kontaktservice.kontaktRow($scope) + avtalerservice.avtalerRow($scope) + blodtrykkservice.blodtrykkRow($scope) + labservice.labRow($scope) + sykemeldingservice.sykemeldingRow($scope);

        }

    }


});
