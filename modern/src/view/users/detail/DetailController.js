Ext.define('MyApp.view.users.detail.DetailController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.users-detail-detail',

    requires: [
    	'MyApp.model.User'
    ],
    onSegmentedButtonToggle: function(container,button,pressed) {
    	if (pressed) {

    		if (button.getText()=='Exercises') {
    			this.getView().setActiveItem(0);
    		} else {
				this.getView().setActiveItem(1);
    		}
    		
    	}
    },
    onInitialize: function(cmp) {
    	this.getViewModel().set('userId',cmp.getUserid());
    	MyApp.model.User.load(cmp.getUserid(), {
    		success: function(record,operation) {
    			this.getViewModel().set('userData',record.getData());
    		},
    		failure: function(record,operation) {
    			Ext.Msg.alert("Doh!","Failed to retrieve user record");
    		},
    		scope: this
    	});
    }
    
});
