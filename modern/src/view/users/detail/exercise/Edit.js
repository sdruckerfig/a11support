
Ext.define('MyApp.view.users.detail.exercise.Edit',{
    extend: 'Ext.form.Panel',
    xtype: 'editexercise',
    requires: [
        'MyApp.view.users.detail.exercise.EditController',
        'MyApp.view.users.detail.exercise.EditModel',
        'Ext.field.Radio',
        'Ext.field.Select',
        'Ext.form.FieldSet'
    ],

    controller: 'users-detail-exercise-edit',
    viewModel: {
        type: 'users-detail-exercise-edit'
    },
    config: {
        exerciseId : null,
        userId: null
    },
    bind: {
        record: '{rec}'
    },
    listeners: {
        initialize: 'onInitialize'
    },
    header: false,
    items: [
        {
            xtype: 'selectfield',
            bind: {
                store: 'VerGroup'
            },
            valueField: 'id',
            displayField: 'label',
            name: 'verGroup',
            label: 'Ver Group',
            labelAlign: 'top'
        },
        {
            xtype: 'fieldset',
            title: 'Type',
            items: [
                {
                    xtype: 'radiofield',
                    name: 'accessType',
                    value: "R",
                    label: "Read"

                },

                {
                    xtype: 'radiofield',
                    name: 'accessType',
                    value: "W",
                    label: "Write"
                }
            ]
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            layout: {
                pack: 'center'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Save',
                    handler: 'onSave'
                },
                {
                    xtype: 'button',
                    text: 'Delete',
                    handler: 'onDelete',
                    bind: {
                        hidden : "{isPhantom}"
                    }
                } 
            ]
        }

    ]
    
});
