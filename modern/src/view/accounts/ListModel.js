Ext.define('MyApp.view.accounts.ListModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.accounts-list',
	requires: [
		'MyApp.model.Account'
	],
	data: {
		searchTerm: ''
	},
	stores: {
		'SearchResults': {
			model: 'MyApp.model.Account',
			remoteFilter: true,
			sorters: [{
				property: 'accountName',
				direction: 'ASC'
			}],
			groupField: 'accountName',
			filters: [{
				property: 'term',
				value: '{searchTerm}'
			}]
		}
	}

});