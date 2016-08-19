Ext.define('MyApp.view.performance.PerformanceController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.performance-performance',
	requires: [
		'MyApp.view.performance.search.Results'
	],

	routes: {
		'home/perform/results' : {
			action: 'doPerformResults'
		}
	},

	doPerformResults: function() {
		this.getView().push({
			xtype: 'performancesearchresults',
			title: 'Search Results'
		});
	},

	onBack: function() {
		Ext.util.History.back();
	}

});