const router = require('express').Router();
const { Rectangular,Oval,Mirror } = require('../models');

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
    const dbRectangularData = await Rectangular.findAll({
         include: [
         {
             attributes: ['name', 'price'],
         },
         ],
    });
    const dbOvalData = await Oval.findAll({
        include: [
        {
            attributes: ['name', 'price'],
        },
        ],
    });
    const dbMirrorData = await Mirror.findAll({
        include: [
        {
            attributes: ['name', 'price'],
        },
        ],
    });

    const galleriesRec = dbRectangularData.map((gallery) =>
         gallery.get({ plain: true })
    );
    const galleriesOv = dbOvalData.map((gallery) =>
         gallery.get({ plain: true })
    );
    const galleriesMirr = dbMirrorData.map((gallery) =>
         gallery.get({ plain: true })
    );

    res.render('products',{})
}
catch(err) {
    console.log(err);
    res.status(500).json(err);
}
})
