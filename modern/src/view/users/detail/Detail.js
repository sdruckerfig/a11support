
Ext.define('MyApp.view.users.detail.Detail',{
    extend: 'Ext.Container',
    xtype: 'usersdetail',
    requires: [
        'MyApp.view.users.detail.DetailController',
        'Ext.layout.Card',
        'MyApp.view.users.detail.Exercises',
        'MyApp.view.users.detail.DetailModel',
        'MyApp.view.users.detail.User'
    ],
    viewModel: {
        type: 'users-detail-detail'
    },
    controller: 'users-detail-detail',
    
    layout: {
        type: 'card',
        animation: 'flip'
    },
    config: {
        userid : null
    },
    listeners: {
        'initialize' : 'onInitialize'
    },
    items: [
        {
            xtype: 'exerciseslist'
        },
        {
            xtype: 'userdetail'
        },
        {
            xtype: 'toolbar',
            docked: 'top',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'segmentedbutton',
                    allowMultiple: false,
                    listeners: {
                        toggle: 'onSegmentedButtonToggle'
                    },
                    items: [
                        {
                            text: 'Exercises',
                            pressed: true
                        },
                        {
                            text: 'Detail'
                        }
                    ]
                }
            ]

        }
    ]

});
