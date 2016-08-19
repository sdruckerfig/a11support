Ext.define('MyApp.view.users.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.users-list',

    onSearchFieldChange: function(textfield, newValue, oldValue) {

    	this.getViewModel().set('searchTerm',newValue);

    },

    onListItemTap : function(list, index, target, record, e, eOpts) {
    	this.redirectTo('users/' + record.get('id'));
    }
    
});
