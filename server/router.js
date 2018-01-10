const authentication = require('./controllers/authentication');
const passport = require('passport');
const passportService = require('./services/passport');

//creating required middleware for strategies to be used
const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});

module.exports = function(app){

    app.get('/', requireAuth, function(req, res){
        res.send({message: 'This is the extra secret from the server'});
    });

    app.post('/signin', requireSignin, authentication.signin);

    app.post('/signup', authentication.signup);
}