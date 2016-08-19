
Ext.define('MyApp.view.accounts.Detail',{
    extend: 'Ext.panel.Panel',

    requires: [
        'MyApp.view.accounts.DetailController',
        'MyApp.view.accounts.DetailModel'
    ],

    controller: 'accounts-detail',
    viewModel: {
        type: 'accounts-detail'
    },

    html: 'Hello, World!!'
});
