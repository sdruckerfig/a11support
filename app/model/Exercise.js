Ext.define('MyApp.model.Exercise', {
    extend: 'Ext.data.Model',

    fields: [
        //   { name: 'role', type: 'auto' },
        {
            name: 'verGroup',
            type: 'auto'
        }, {
            name: 'accessType',
            type: 'auto'
        }, {
            name: 'id',
            type: 'int'
        }, {
            name: 'userId',
            type: 'int'
        }
        //   { name: 'lockRuleExclusions', type: 'auto' }

    ],
    proxy: {
        type: 'rest',
        url: '/a11support/resources/data/UserExercise.json'
    }
});