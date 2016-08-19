
Ext.define('MyApp.view.users.detail.Exercises',{
    extend: 'Ext.dataview.List',
    xtype: 'exerciseslist',
    requires: [
        'MyApp.view.users.detail.ExercisesController'
    ],

    controller: 'users-detail-exercises',

    bind: {
        store: '{Exercises}'
    },
    
    onItemDisclosure: true,

    itemTpl: [
      //  'Role: {role}<br />',
        'Ver : {verGroup}<br />',
        'Type: {accessType}'
      //  'LRE : {lockRuleExclusions}'
    ],

    listeners: {
        disclose: 'onDisclose'
    },

    items: [
        {
            xtype: 'toolbar',
            docked: 'bottom',
            layout: {
                pack: 'center'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'New',
                    handler: 'onNew'
                }
            ]
        }
    ]
});
