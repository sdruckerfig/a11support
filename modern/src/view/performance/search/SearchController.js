Ext.define('MyApp.view.performance.search.SearchController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.performance-search-search',

	routes: {
		'home/perform/usersearch': {
			action: 'onUserSearchToggle'
		},
		'home/perform': {
			action: 'onUserSearchToggleOff'
		}
	},

	onUserSearchToggle: function() {
		this.getView().setActiveItem(1);
		var me = this;
		setTimeout(function() {
				me.getView().down('searchfield').focus();
		},300);
	
	},
	onUserSearchToggleOff: function() {
		this.getView().setActiveItem(0);
	}

});