Ext.define('MyApp.view.accounts.ListController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.accounts-list',

	onSearch: function(cmp, newValue, oldValue) {
		this.getViewModel().set('searchTerm', newValue);
	}

});