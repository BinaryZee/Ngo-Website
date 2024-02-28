var admin = require("firebase-admin");

var serviceAccount = require("../devshouse-9ca80-firebase-adminsdk-9wuh4-03070609b9.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
