const sequelize = require('../config/connection');
const seedRectangular = require('./rectangularData');
const seedOval = require('./ovalData');
const seedMirrors = require('./mirrorsData');

const seedAll = async () => {
    await sequelize.sync({ force: true});

    await seedRectangular();

    await seedOval();

    await seedMirrors();

    process.exit(0); //why is this 0 for???
};

seedAll();