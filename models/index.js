const User = require('./User');
const Gallery = require('./Gallery');
const Rectangular = require('./Rectangular');
const Oval = require('./Oval');
const Mirrors = require('./Mirrors');

Gallery.hasMany(Rectangular, {
    foreignKey: 'gallery_id',
});

Rectangular.belongsTo (Gallery, {
    foreignkey: 'gallery_id',
});

Oval.belongsTo (Gallery, {
    foreignkey: 'gallery_id',
});

Mirrors.belongsTo (Gallery, {
    foreignkey: 'gallery_id',
});

module.exports = {User, Gallery, Rectangular, Oval, Mirrors};