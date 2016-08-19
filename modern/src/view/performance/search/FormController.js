Ext.define('MyApp.view.performance.search.FormController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.performance-search-form',

	onSelectUser: function() {
		this.redirectTo('home/perform/usersearch');
	},

	onClearSelectedUser: function(b, e) {
		// what goes here????
		var vm = this.getViewModel();
		vm.set('selectedUserId',0);
		vm.set('selectedUserName','');
	},

	onSearch: function(b) {
		var values = this.getView().getValues();
		var filters = [];
		var vm = this.getViewModel();
		var store = vm.getStore('PerformanceSearchResults');
		
		for (var i in values) {
			if (!Ext.isEmpty(values[i])) {
				filters.push({
					property: i,
					value: values[i]
				});
			}
		}

		store.clearFilter();
		store.filter(filters);
		store.load();
		this.redirectTo('home/perform/results');
	}

});