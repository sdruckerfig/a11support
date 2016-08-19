
Ext.define('MyApp.view.accounts.Accounts',{
    extend: 'Ext.NavigationView',
    xtype: 'accounts',
    requires: [
        'MyApp.view.accounts.AccountsController',
        'MyApp.view.accounts.AccountsModel',
        'MyApp.view.accounts.List'
    ],

    controller: 'accounts-accounts',
    viewModel: {
        type: 'accounts-accounts'
    },
    items: [
        {xtype: 'accountslist', title: "Account Search"}
    ]
});
