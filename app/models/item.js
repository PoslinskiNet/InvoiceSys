import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    quantity: DS.attr(),
    invoice: DS.belongsTo()
    // description: DS.attr(),
    // unit: DS.attr(),
    // net: DS.attr(),
    // tax: DS.attr(),
    // positions: DS.hasMany('positon')
});
