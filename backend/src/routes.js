const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
var admin = require('firebase-admin')
var serviceAccount = require('../kdusms-876be-firebase-adminsdk-o1vik-c3460c191e.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
},
)

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)


    app.post("/setAdminClaim", (req, res) => {
        const uid = req.body.uid;
        admin
            .auth()
            .setCustomUserClaims(uid, { admin: true })
            .then(() => {
                // The new custom claims will propagate to the user's ID token the
                // next time a new one is issued.
                res.send('Sucess')
            });
    });
}
