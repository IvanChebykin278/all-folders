/*eslint no-undef: "off"*/
/*eslint no-restricted-globals: "off"*/
/*eslint no-unused-expressions: "off"*/

var exportClasses = {};

sap.ui.define([
    'sap/ui/model/odata/v2/ODataModel',
    'sap/ui/model/Filter',
     'sap/ui/model/FilterOperator'
], function(ODataModel, Filter, FilterOperator) {
    exportClasses.oDataModel = ODataModel;
    exportClasses.filter = Filter;
    exportClasses.filterOperator = FilterOperator;
});

export const ODataModel = exportClasses.oDataModel;
export const Filter = exportClasses.filter;
export const FilterOperator = exportClasses.filterOperator;