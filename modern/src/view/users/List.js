
Ext.define('MyApp.view.users.List',{
    extend: 'Ext.dataview.List',
    xtype: 'userslist',
    requires: [
        'MyApp.view.users.ListController',
        'MyApp.view.users.ListModel',
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging'
    ],

    controller: 'users-list',
    viewModel: {
        type: 'users-list'
    },

    bind: {
        store: '{SearchResults}'
    },

    listeners: {
        'itemtap' : 'onListItemTap'
    },
   
    plugins: [
        {
            xclass: 'Ext.plugin.PullRefresh'
        },
        {
            xclass: 'Ext.plugin.ListPaging',
            autoPaging: true
        }
    ],

    onItemDisclosure: true, 
    striped: true,
    infinite: true,

    itemTpl: [
        '{firstName} {lastName}<br />',
        '{userName}<br />',
        '{roles}'
    ],

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'textfield',
                    flex: 1,
                    listeners: {
                        'change' : {
                            fn: 'onSearchFieldChange',
                            buffer: 250
                        }
                    }
                }
            ]
        }

    ]
});
