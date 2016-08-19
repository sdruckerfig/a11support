Ext.define('MyApp.store.VerGroup', {
    extend: 'Ext.data.Store',
    alias: 'store.VerGroup',
    requires: ['MyApp.model.VerGroup'],
    model: 'MyApp.model.VerGroup',
    autoLoad: true
});
