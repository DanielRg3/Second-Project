const {Oval} = require('../models');

const ovaldata = [
    {
        name: 'Oval #1',
        type: 'Oval Irregular',
        chairs: '6',
        dimensions: 'Diameter: 2.45m (furthest points)',
        price: '45000',
        Description: 'Oval irregular shape table made entirely from Parota wood. Includes 6 chairs with fabric cover. (All chairs are different models)',
    },
    {
        name: 'Oval #2',
        type: 'Oval Regular',
        chairs: '6',
        dimensions: 'Diameter: 2.35m (furthest points)',
        price: '40000',
        Description: 'Oval irregular shape table made entirely from Parota wood. Includes 6 chairs with fabric cover. (All chairs are different models)',
    },
];

const seedOval = () => Oval.bulkCreate(ovaldata);

module.exports = seedOval;