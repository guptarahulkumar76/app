const server = require('../server/server.js')
const functions = require("firebase-functions")
exports.createUser = functions.https.onRequest(server); 

