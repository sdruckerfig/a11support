Ext.define('MyApp.model.User', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'firstName', type: 'auto' },
        { name: 'lastName', type: 'auto' },
        { name: 'group', type: 'auto' },
        { name: 'email', type: 'auto' },
        { name: 'phone', type: 'auto' },
        { name: 'agency', type: 'auto' },
        { name: 'id', type: 'int' }
    ],
    proxy: {
        type: 'ajax',
        url: '/a11support/resources/data/User.json'
    }
});
