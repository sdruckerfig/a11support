Ext.define('MyApp.model.ExerciseEdit', {
	extend: 'MyApp.model.Exercise',
	proxy: {
		type: 'ajax',
		url: '/a11support/resources/data/UserExerciseEdit.json',
		writer: {
			writeAllFields: true
		}
	}
});
