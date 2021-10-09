const {Mirrors} = require('../models');

const mirrorsdata = [
    {
        name: 'Mirror #1',
        type: 'Aged Wood',
        dimensions: '2.20m x 1.20m',
        price: '25000',
        Description: 'Aged Wood frame mirror for leaving room decoration.',
    },
    {
        name: 'Mirror #2',
        type: 'Nogal Wood',
        dimensions: '2.00m x 0.80m',
        price: '18000',
        Description: 'Nogal wood frame mirror for leaving room decoration.',
    },
    {
        name: 'Mirror #3',
        type: 'Aged Wood',
        dimensions: '1.40m x 0.85m',
        price: '12000',
        Description: 'Aged Wood frame mirror for leaving room decoration.',
    },
    {
        name: 'Mirror #4',
        type: 'Aged Wood',
        dimensions: '1.60m x 0.85m',
        price: '18000',
        Description: 'Aged Wood frame mirror for leaving room decoration.',
    },
    {
        name: 'Mirror #5',
        type: 'Parota Wood',
        dimensions: 'Diameter: 0.75m (farthest points)',
        price: '3500',
        Description: 'Parota Wood frame mirror for leaving room decoration.',
    },
    {
        name: 'Mirror #6',
        type: 'Parota Wood',
        dimensions: '0.80m x 0.35m',
        price: '3500',
        Description: 'Parota Wood frame mirror for leaving room decoration.',
    },
    {
        name: 'Mirror #7',
        type: 'Parota Wood',
        dimensions: 'Diameter: 0.65m (farthest points)',
        price: '6000',
        Description: '2 Parota Wood frame mirrors for leaving room decoration.',
    },
];

const seedMirrors = () => Mirrors.bulkCreate(mirrorsdata);

module.exports = seedMirrors;