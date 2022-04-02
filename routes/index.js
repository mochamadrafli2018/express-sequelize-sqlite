module.exports = app => {
    const router = require("express").Router();
    // index
    app.get("/", (req, res) => {
        return res.status(200).send({ message: "Welcome express sqlite application." });
    });
    // sign up new user
    router.post('/register', require('../controllers/user.controller.js').newUser);
    // sign in (user authentication)
    router.post('/login', require('../controllers/auth.controller.js').signIn);
    // verify token (user authorization)
    router.get('/verify', require('../controllers/auth.controller').verifyAccessToken);
    // read all user data
    router.get('/users', require('../controllers/user.controller.js').findAll);
    // read user data by id
    router.get('/users/:id', require('../controllers/user.controller.js').findOne);
    // update user data by id
    router.put('/users/:id', require('../controllers/user.controller.js').findOneAndUpdate);
    // delete user data by id
    router.delete('/users/:id', require('../controllers/user.controller.js').destroyById);
    // delete all user data
    router.delete('/users', require('../controllers/user.controller.js').destroyAll);
  
    // app.use('/books', books);
    app.use('/api', router)
  
  };
  