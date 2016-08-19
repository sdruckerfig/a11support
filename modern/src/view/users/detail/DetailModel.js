Ext.define('MyApp.view.users.detail.DetailModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.users-detail-detail',
    requires: ['MyApp.model.Exercise'],
    data: {
       userId: "",
       userData: {}
    },
    stores: {
    	Exercises : {
    		autoLoad: true,
    		remoteFilter: true,
    		model: 'MyApp.model.Exercise',
    		filters: [
    			{
    				property: 'userId',
    				value: '{userId}'
    			}
    		]
    	}
    }

});
