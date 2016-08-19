Ext.define('MyApp.model.VerGroup', {
	extend: 'Ext.data.Model',

	fields: [{
		name: 'id',
		type: 'int'
	}, {
		name: 'label',
		type: 'auto'
	}],
	proxy: {
		type: 'rest',
		url: '/a11support/resources/data/VerGroup.json'
	}
});