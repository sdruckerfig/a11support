Ext.define('MyApp.view.performance.PerformanceModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.performance-performance',
  
  data: {
		userName: '',
		selectedUserName: '',
		selectedUserId: 0
	},
	stores: {

		'Actions': {
			fields: 'id,label',
			autoLoad: true,
			proxy: {
				type: 'ajax',
				url: '/a11support/resources/data/actions.json'
			}
		},

		'UserSearchResults': {
			fields: 'id,firstName,lastName',
			remoteFilter: true,
			filters: [{
				property: 'name',
				value: '{userName}'
			}],
			proxy: {
				type: 'ajax',
				url: '/a11support/resources/data/UsersSearchResults.json',
				reader: {
					totalProperty: 'total',
					successProperty: 'success',
					rootProperty: 'data'
				}
			}
		},

		'PerformanceSearchResults': {

			remoteFilter: true,
			remoteSort: true,
			fields: [
				"id", {
					name: 'date',
					type: 'date',
					dateFormat: 'm/d/Y H:i'
				}, {
					name: 'seconds',
					type: 'int'
				},
				"actionType",
				"username"
			],
			proxy: {
				type: 'ajax',
				url: '/a11support/resources/data/PerformanceSearchResults.json',
				reader: {
					totalProperty: 'total',
					successProperty: 'success',
					rootProperty: 'data'
				}
			}

		}
	}
});
