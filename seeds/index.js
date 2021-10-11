const sequelize = require('../config/connection');
const seedProducts = require('./productsData');

const seedAll = async () => {
    await sequelize.sync({ force: true});

    await seedProducts();

    process.exit(0); //why is this 0 for???
};

seedAll();
