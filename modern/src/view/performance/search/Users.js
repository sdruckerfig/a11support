Ext.define('MyApp.view.performance.search.Users', {
    extend: 'Ext.dataview.List',
    xtype: 'performancesearchusers',

    requires: [
        'MyApp.view.performance.search.UsersController',
        'MyApp.view.performance.search.UsersModel'
    ],

    controller: 'performance-search-users',
    /*
    viewModel: {
        type: 'performance-search-users'
    },
    */
    bind: {
        store: '{UserSearchResults}'
    },
    listeners: {
        itemtap : 'onItemTap'
    },
    itemTpl: [
        '{lastName}, {firstName}'
    ],
    items: [{
        xtype: 'toolbar',
        docked: 'top',
        items: [{
                xtype: 'button',
                text: 'Back',
                handler: 'onBack'
            }, {
                xtype: 'searchfield',
                flex: 1,
                listeners: {
                    'change' : {
                        fn: 'onSearchFieldChange',
                        buffer: 250
                    }
                }
            }

        ]
    }]
});