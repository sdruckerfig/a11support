Ext.define('MyApp.model.Account', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'accountId', type: 'int' },
        { name: 'accountName', type: 'auto' },
        { name: 'active', type: 'boolean' },
        { name: 'verGroupName', type: 'auto' }
    ],

    proxy : {
    	type: 'ajax',
    	url: '/a11support/resources/data/AccountSearchResults.json',
    	reader: {
    		totalProperty: 'total',
    		successProperty: 'success',
    		rootProperty: 'data'
    	}
    }
});
