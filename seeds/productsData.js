const {Products} = require('../models');

const productsdata = [
    {
        name: 'Wooden Chair',
        price: '5000',
        description: 'Modern wooden chair made out of Teka Wood and a comfortable and stylish fabric cushon. The selected fabric for this cushon is of the highes quality, it is water and soil resistant.',
    },
    {
        name: 'Single Armchair',
        price: '13000',
        description: 'Comfortable fabric armchair. The intention of this model is to bring the highest comfort to our clients. The selected fabric for this cushon is of the highes quality, it is water and soil resistant.',
    },
    {
        name: 'Wooden Rockingchair',
        price: '9500',
        description: 'This rockingchair brings both comfort, style and luxury to your leaving-room. Some clients asked us for a stylished rockingchair that will addapt perfectly to a leaving room environment and here it is.',
    },
    {
        name: 'Stylish Chair',
        price: '9500',
        description: 'For the moder client that likes to have a comfortable and modern looking type of rockingchair we created the Stylish Chair. The cushon is cover with genuine leather and the wooden fram made out of Encino Wood',
    },
    {
        name: 'Modern Chair',
        price: '8000',
        description: 'The modern chair is for our extravagant clients. It is a comfortable fabric covered chair that will modernize your leaving room. The fabric is water and soil resistant.',
    },
    {
        name: 'Mapple Wood Dinning Table',
        price: '45300',
        description: 'This elegant 6 chaired Dinning Table is made out of Parota Wood. The dimensions are 1.50m x 0.80m.',
    },
    {
        name: 'Sofa',
        price: '18000',
        description: 'This comforable sofa will let you rest while you are seated!!! The sofa is covered in fabric of our highes quality which resists water and soil.',
    },
    {
        name: 'Wooden Bed',
        price: '32000',
        description: 'Our Wooden Bed will help you rest while providing an elegant style to your bedroom. This creation was inspired on the Scandinavian Furniture style and is entirely made out of Parota Wood.',
    },
];

const seedProducts = () => Products.bulkCreate(productsdata);

module.exports = seedProducts;