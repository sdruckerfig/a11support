Ext.define('MyApp.view.performance.search.UsersController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.performance-search-users',

	onSearchFieldChange: function(field, newValue, oldValue) {
		this.getViewModel().set('userName', newValue);
	},

	onBack: function(b,e) {
		this.redirectTo('home/perform');
	},

	onItemTap: function(list, index , target , record , e , eOpts ) {
		this.getViewModel().set('selectedUserId', record.get('id'));
		this.getViewModel().set('selectedUserName',
			record.get('lastName') + ', ' + record.get('firstName')
		);
		this.onBack();
	}

});