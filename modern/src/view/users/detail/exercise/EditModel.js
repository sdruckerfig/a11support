Ext.define('MyApp.view.users.detail.exercise.EditModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.users-detail-exercise-edit',
	data: {
		rec: null
	},
	formulas: {
		isPhantom: function(get) {
			console.log(get('rec'));
			return get('rec').phantom;
		}
	}

});