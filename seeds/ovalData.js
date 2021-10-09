const {Oval} = require('../models');

const ovaldata = [
    {
        name: 'Oval #1',
        shape: 'Oval Irregular',
        chairs: '6',
        dimensions: 'Diameter: 2.45m (furthest points)',
        price: '45000',
        description: 'Oval irregular shape table made entirely from Parota wood. Includes 6 chairs with fabric cover. (All chairs are different models)',
    },
    {
        name: 'Oval #2',
        shape: 'Oval Regular',
        chairs: '6',
        dimensions: 'Diameter: 2.35m (furthest points)',
        price: '40000',
        description: 'Oval irregular shape table made entirely from Parota wood. Includes 6 chairs with fabric cover. (All chairs are different models)',
    },
];

const seedOval = () => Oval.bulkCreate(ovaldata);

module.exports = seedOval;