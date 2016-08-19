
Ext.define('MyApp.view.users.detail.User',{
    extend: 'Ext.Container',
    xtype: 'userdetail',
    requires: [
        'MyApp.view.users.detail.UserController'
    ],
    controller: 'users-detail-user',
    bind: {
        data: '{userData}'
    },
    tpl: [
        '<label>Name</label><br />',
        '{firstName} {lastName}<br />',
        '<label>Agency</label><br />',
        '{agency}<br />',
        '<label>Group</label><br />',
        '{group}<br />',
        '<label>Email</label><br />',
        '{email}<br />',
        '<label>Phone</label><br />',
        '{phone}'
    ]
   
});
