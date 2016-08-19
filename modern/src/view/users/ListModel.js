Ext.define('MyApp.view.users.ListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.users-list',
    data: {
      searchTerm: ''
    },
    requires: [
    	'MyApp.model.UserSearchResult'
    ],
    stores: {
    	'SearchResults' : {
    		model: 'MyApp.model.UserSearchResult',
    		remoteFilter: true,
    		remoteSort: true,
    		filters: [
    		  {
    			'property' : 'searchterm',
    			'value' : '{searchTerm}'
    		  }
    		]
    	}
    }

});
