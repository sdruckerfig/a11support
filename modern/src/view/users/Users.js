
Ext.define('MyApp.view.users.Users',{
    extend: 'Ext.NavigationView',
    xtype: 'usersmain',
    requires: [
        'MyApp.view.users.UsersController',
        'MyApp.view.users.UsersModel',
        'MyApp.view.users.List'
    ],

    controller: 'users-users',
    viewModel: {
        type: 'users-users'
    },
    listeners: {
        back: 'onBack'
    },
    items: [
        {
            xtype: 'userslist',
            title: 'User Search'
        }
    ]
});
