
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'MyApp.view.users.Users',
        'MyApp.view.performance.Performance',
        'MyApp.view.accounts.Accounts'
    ],

    controller: 'main',
    viewModel: 'main',

    listeners: {
        initialize: 'onInitialize'
    },

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    items: [
        {
            title: 'Users',
            iconCls: 'x-fa fa-users',
            xtype: 'usersmain'
        },{
            title: 'Accounts',
            iconCls: 'x-fa fa-user',
            xtype: 'accounts'
        },{
            title: 'Perform',
            iconCls: 'x-fa fa-user',
            xtype: 'performancenavigationview'
        }
    ]
});
