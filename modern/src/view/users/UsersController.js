Ext.define('MyApp.view.users.UsersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.users-users',

    requires: [
        'MyApp.view.users.detail.Detail',
        'MyApp.view.users.detail.exercise.Edit'
    ],

    routes: {
        'users/:id': {
            action: 'onShowUserDetail',
            conditions: {
                ':id': '([0-9]+)'
            }
        },
        'users/:userId/exercises/:exerciseId/edit': {
            action: 'onEditExercise',
            conditions: {
                ':userId': '([0-9]+)',
                ':exerciseId': '([0-9]+)'
            }
        }
    },

    onEditExercise: function(userId,exerciseId) {
        var me = this;
        if (Ext.getStore('VerGroup').getCount() > 0) {
            this.getView().push({
                // title: 'Edit Exercise',
                xtype: 'editexercise',
                exerciseId: exerciseId
            });
        } else {
            Ext.getStore('VerGroup').load(function() {
               me.getView().push({
                    // title: 'Edit Exercise',
                    xtype: 'editexercise',
                    exerciseId: exerciseId,
                    userId: userId
                });
            });
        }
    },

    onShowUserDetail: function(id) {

        var xtypes = ["editexercise"];
        var nv = this.getView();
        for (var i = 0; i < xtypes.length; i++) {
            if (nv.down(xtypes[i])) {
                nv.pop();
            }
        }

        if (nv.down('usersdetail')) {
            nv.down('usersdetail').getViewModel().getStore('Exercises').load();
        } else {
            this.getView().push({
                title: 'User Detail',
                xtype: 'usersdetail',
                userid: id
            });
        }
    },
    onBack: function() {
        Ext.util.History.back();
    }

});