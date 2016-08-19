Ext.define('MyApp.view.users.detail.ExercisesController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.users-detail-exercises',

	onDisclose: function(list, record, target, index, e, eOpts) {
		this.redirectTo(''.concat(
			'users/',
			record.get('userId'),
			'/exercises/',
			record.get('id'),
			'/edit'));
	},

	onNew: function(b,e) {
		var userId = location.hash.split('/')[1];
		this.redirectTo('users/' + userId + '/exercises/0/edit');
	},
});