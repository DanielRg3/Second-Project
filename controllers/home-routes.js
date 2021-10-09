const router = require('express').Router();
const { Rectangular,Oval,Mirror } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
    try {
    // const dbRectangularData = await Rectangular.findAll({
    //     include: [
    //     {
    //         attributes: ['name', 'price'],
    //     },
    //     ],
    // });

    // const galleries = dbRectangularData.map((gallery) =>
    //     gallery.get({ plain: true })
    // );

    res.render('homepage', {
        
        loggedIn: req.session.loggedIn,
    });
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
    });

router.get('/products',async (req,res) => {
// traer productos de 3 tablas pending
try{
    res.render('products',{})
}
catch(err) {
    console.log(err);
    res.status(500).json(err);
}
})
// GET info about specific product
router.get('/rectangular/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  //Will make a helper function for loggedI
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbGalleryData = await Gallery.findByPk(req.params.id, {
        include: [
          {
            model: Painting,
            attributes: [
              'name',
              'Price',
              'description',
              'dimensions',
              'shape',
            ],
          },
        ],
      });
      const gallery = dbGalleryData.get({ plain: true });
      res.render('rectangular', { Rectangular, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});
router.get('/oval/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbGalleryData = await Gallery.findByPk(req.params.id, {
        include: [
          {
            attributes: [
              'name',
              'Price',
              'description',
              'dimensions',
              'shape',
            ],
          },
        ],
      });
      const gallery = dbGalleryData.get({ plain: true });
      res.render('oval', { Oval, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});
router.get('/mirror/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbGalleryData = await Gallery.findByPk(req.params.id, {
        include: [
          {
            attributes: [
              'name',
              'Price',
              'description',
              'dimensions',
              'shape',
            ],
          },
        ],
      });
      const gallery = dbGalleryData.get({ plain: true });
      res.render('gallery', { Mirror, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});
// GET one painting


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;