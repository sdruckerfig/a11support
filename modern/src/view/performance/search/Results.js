
Ext.define('MyApp.view.performance.search.Results',{
    extend: 'Ext.dataview.List',
    xtype: 'performancesearchresults',
    requires: [
        'MyApp.view.performance.search.ResultsController',
        'MyApp.view.performance.search.ResultsModel'
    ],

    controller: 'performance-search-results',
    /*
    viewModel: {
        type: 'performance-search-results'
    },
    */

    bind: {
        store: '{PerformanceSearchResults}'
    },

    itemTpl: [
        '{date:date("m/d/Y H:i")}<br />',
        '{actionType}<br />',
        '{seconds} Seconds'
    ]
});
