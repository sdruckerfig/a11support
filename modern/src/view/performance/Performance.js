Ext.define('MyApp.view.performance.Performance', {
    extend: 'Ext.NavigationView',
    xtype: 'performancenavigationview',

    requires: [
        'MyApp.view.performance.PerformanceController',
        'MyApp.view.performance.PerformanceModel',
        'MyApp.view.performance.search.Search'
    ],

    controller: 'performance-performance',
    viewModel: {
        type: 'performance-performance'
    },

    items: [{
        xtype: 'performancesearch',
        title: 'Search'
    }],

    listeners: {
        back : 'onBack'
    }

});