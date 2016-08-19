Ext.define('MyApp.view.users.detail.exercise.EditController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.users-detail-exercise-edit',

	onInitialize: function(view) {
		var id = view.getExerciseId();
		if (id == 0) {
			// new record
			var rec = Ext.create('MyApp.model.ExerciseEdit');
			rec.set('id',0);
			rec.set('userId',view.getUserId());
			this.getViewModel().set("rec", rec);
		} else {
			MyApp.model.ExerciseEdit.load(id, {
				success: function(rec, req) {
					this.getViewModel().set("rec", rec);
				},
				failure: function(rec, req) {
					Ext.Msg.alert("Doh", "I have a problem");
					console.log(arguments);
				},
				scope: this
			});
		}
	},

	onSave: function(b, e) {
		var me = this;
		var rec = this.getViewModel().get('rec');
		var vals = this.getView().getValues();
		// data validation here, if required
		rec.set(vals);
		rec.save({
			success: function(record, operation) {
				Ext.Msg.alert("Transaction Complete", "Record Saved.");
				me.getViewModel().set('rec',record);
			},
			failure: function(record, operation) {
				Ext.Msg.alert("Transaction Failed", "Try again later");
			}
		});
	},

	onDelete: function(b, e) {
		var me = this;
		Ext.Msg.confirm(
			"Please Confirm",
			"Delete this record?",
			function(b) {
				if (b == 'yes') {
					var rec = this.getViewModel().get('rec');
					rec.erase({
						success: function(record, operation) {
							Ext.Msg.alert(
								"Transaction Complete",
								"Record Deleted.",
								function(b) {
									me.redirectTo('users/' + rec.get('userId'));
								});

						},
						failure: function(record, operation) {
							Ext.Msg.alert("Transaction Failed", "Try again later");
						}
					});
				}
			},
			this
		);
	}
});