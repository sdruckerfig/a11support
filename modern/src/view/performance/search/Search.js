
Ext.define('MyApp.view.performance.search.Search',{
    extend: 'Ext.Container',
    xtype: 'performancesearch',
    requires: [
        'MyApp.view.performance.search.SearchController',
        'MyApp.view.performance.search.SearchModel',
        'MyApp.view.performance.search.Form',
        'MyApp.view.performance.search.Users'
    ],

    controller: 'performance-search-search',
    /*
    viewModel: {
        type: 'performance-search-search'
    },
    */

    layout: {
        type: 'card',
        animation: 'flip'
    },

    items: [
        {xtype: 'performancesearchform'},
        {xtype: 'performancesearchusers'}
    ]
   
});
