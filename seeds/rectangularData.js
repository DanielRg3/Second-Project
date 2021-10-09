const {Rectangular} = require('../models');

const rectangulardata = [
    {
        name: 'Rec #1',
        shape: 'Rectangular Regular',
        chairs: '10',
        dimensions: '2.80m x 1.00m',
        price: '75000',
        description: 'Rectangular table made entirely from Parota wood. Includes 10 chairs with fabric cover.',
    },
    {
        name: 'Rec #2',
        shape: 'Rectangular Irregular',
        chairs: '12',
        dimensions: '2.55m x 1.60m',
        price: '85000',
        description: 'Rectangular table made entirely from Parota wood. Includes 10 chairs with fabric cover and a 1.8m long bench.',
    },
    {
        name: 'Rec #3',
        shape: 'Rectangular Irregular',
        chairs: '8',
        dimensions: '2.00m x 0.80m',
        price: '60000',
        description: 'Rectangular table made entirely from Parota wood. Includes 8 chairs with leather cover.',
    },
    {
        name: 'Rec #4',
        shape: 'Rectangular Regular',
        chairs: '12',
        dimensions: '2.80m x 1.00m',
        price: '70000',
        description: 'Rectangular table made entirely from Parota wood. Includes 12 chairs with plastic cover.',
    },
    {
        name: 'Rec #5',
        shape: 'Rectangular Regular',
        chairs: '8',
        dimensions: '2.20m x 1.10m',
        price: '70000',
        description: 'Rectangular table made entirely from Parota wood with black epoxy finishing. Includes 8 chairs with fabric cover. (All chairs are different models)',
    },
];

const seedRectangular = () => Rectangular.bulkCreate(rectangulardata);

module.exports = seedRectangular;