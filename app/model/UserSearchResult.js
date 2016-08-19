Ext.define('MyApp.model.UserSearchResult', {
    extend: 'Ext.data.Model',
   
    fields: [
        { name: 'firstName', type: 'auto' },
        { name: 'lastName', type: 'auto' },
        { name: 'userName', type: 'auto' },
        { name: 'roles', type: 'auto' }
    ],
    proxy : {
    	type: 'rest',
    	url: '/a11support/resources/data/UsersSearchResults.json',
    	reader: {
    		type: 'json',
    		totalProperty: 'count',
    		rootProperty: 'data'
    	}
    }
});
