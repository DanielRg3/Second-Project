const router = require('express').Router();
const { Products } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
    try {

    res.render('homepage', {
        
        loggedIn: req.session.loggedIn,
    });
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
});
router.get('/aboutus', async (req, res) => {
    try {

    res.render('aboutus', {
        
        loggedIn: req.session.loggedIn,
    });
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
});
router.get('/contact', async (req, res) => {
    try {

    res.render('contact', {
        
        loggedIn: req.session.loggedIn,
    });
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
});

router.get('/products',async (req,res) => {
try{
    const dbProductsData = await Products.findAll({
    });

    const products = dbProductsData.map((gallery) =>
         gallery.get({ plain: true })
    );

    res.render('products',{
        products
    })
}
catch(err) {
    console.log(err);
    res.status(500).json(err);
}
})
module.exports=router