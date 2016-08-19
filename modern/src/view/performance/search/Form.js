
Ext.define('MyApp.view.performance.search.Form',{
    extend: 'Ext.form.Panel',
    xtype: 'performancesearchform',
    requires: [
        'MyApp.view.performance.search.FormController',
        'MyApp.view.performance.search.FormModel'
    ],

    controller: 'performance-search-form',
    /*
    viewModel: {
        type: 'performance-search-form'
    },
    */
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
                    text: 'Search',
                    handler: 'onSearch'
                }
            ]
        },
        {
            xtype: 'datepickerfield',
            value: new Date(),
            name: 'date',
            label: 'Date'
        },
        {
            xtype: 'textfield',
            name: 'starttime',
            label: 'Start Time'
        },
        {
            xtype: 'textfield',
            name: 'endtime',
            label: 'End Time'
        },
        {
            xtype: 'selectfield',
            name: 'actionId',
            label: 'Action',
            valueField: 'id',
            displayField: 'label',
            bind: {
                store: '{Actions}'
            }
        },
        {
            xtype: 'fieldset',
            title: 'Select User',
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'textfield',
                    readOnly: true,
                    name: 'user',
                    flex: 1,
                    bind: {
                        value: '{selectedUserName}'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Select',
                    handler: 'onSelectUser'
                },
                {
                    xtype: 'button',
                    text: 'Clear',
                    handler: 'onClearSelectedUser'
                }
            ]
        }
    ]
});
