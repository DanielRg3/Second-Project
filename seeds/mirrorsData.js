const {Mirrors} = require('../models');

const mirrorsdata = [
    {
        name: 'Mirror #1',
        shape: 'Aged Wood',
        dimensions: '2.20m x 1.20m',
        price: '25000',
        description: 'Aged Wood frame mirror for leaving room decoration.',
    },
    {
        name: 'Mirror #2',
        shape: 'Nogal Wood',
        dimensions: '2.00m x 0.80m',
        price: '18000',
        description: 'Nogal wood frame mirror for leaving room decoration.',
    },
    {
        name: 'Mirror #3',
        shape: 'Aged Wood',
        dimensions: '1.40m x 0.85m',
        price: '12000',
        description: 'Aged Wood frame mirror for leaving room decoration.',
    },
    {
        name: 'Mirror #4',
        shape: 'Aged Wood',
        dimensions: '1.60m x 0.85m',
        price: '18000',
        description: 'Aged Wood frame mirror for leaving room decoration.',
    },
    {
        name: 'Mirror #5',
        shape: 'Parota Wood',
        dimensions: 'Diameter: 0.75m (farthest points)',
        price: '3500',
        description: 'Parota Wood frame mirror for leaving room decoration.',
    },
    {
        name: 'Mirror #6',
        shape: 'Parota Wood',
        dimensions: '0.80m x 0.35m',
        price: '3500',
        description: 'Parota Wood frame mirror for leaving room decoration.',
    },
    {
        name: 'Mirror #7',
        shape: 'Parota Wood',
        dimensions: 'Diameter: 0.65m (farthest points)',
        price: '6000',
        description: '2 Parota Wood frame mirrors for leaving room decoration.',
    },
];

const seedMirrors = () => Mirrors.bulkCreate(mirrorsdata);

module.exports = seedMirrors;