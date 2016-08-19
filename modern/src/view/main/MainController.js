Ext.define('MyApp.view.main.MainController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.main',

	routes: {
		'home/:id': {
			action: 'onShowTab'
		}
	},

	onInitialize: function(tabpanel) {
		var tabbar = tabpanel.getTabBar();
		tabbar.on({
			'activetabchange': {
				fn: function(tabbar, newtab, oldtab) {
					var tablabel = newtab.getText().toLowerCase();
					if (this.currentTab != tablabel) {
						this.currentTab = tablabel;
						this.redirectTo('home/' + tablabel);
					}
				},
				scope: this,
				buffer: 100
			}
		});
	},

	onShowTab: function(tabName) {
		console.log(this.getView());
		switch (tabName) {
			case 'users':
				var v = this.getView().down('navigationview');
				for (var i = 1; i < v.items.length; i++) {
					v.pop();
				}
				this.getView().setActiveItem(0);
				break;
			case 'accounts':
				this.getView().setActiveItem(1);
				break;
			case 'perform':
				this.getView().setActiveItem(2);
				break;
		}
	}



});