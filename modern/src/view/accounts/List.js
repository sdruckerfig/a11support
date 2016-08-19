Ext.define('MyApp.view.accounts.List', {
    extend: 'Ext.dataview.List',
    xtype: 'accountslist',
    requires: [
        'MyApp.view.accounts.ListController',
        'MyApp.view.accounts.ListModel'
    ],

    controller: 'accounts-list',

    viewModel: {
        type: 'accounts-list'
    },

    grouped: true,
    pinHeaders: true,

    bind: {
        store: '{SearchResults}'
    },

    itemTpl: [
        '{verGroupName}'
    ],

    // add search field
    items: [{
        xtype: 'toolbar',
        docked: 'top',
        items: [{
            xtype: 'searchfield',
            flex: 1,
            listeners: {
                'change': {
                    fn: 'onSearch',
                    buffer: 250
                }
            }
        }]
    }]


});