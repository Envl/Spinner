const functions = require('firebase-functions')
const admin = require('firebase-admin')
// const geolib = require('geolib');

admin.initializeApp()

const transactions = admin.firestore().collection('transactions')
const items = admin.firestore().collection('items')
const onsale = admin.firestore().collection('onsale')
const users = admin.firestore().collection('users')

let transac = require('./transactionFunc')
const transactionFunc = transac.updateTransaction(functions, transactions)
const onsaleFunc = require('./onsaleFunc').updateOnsale(functions, onsale)
const userFunc = require('./userFunc').updateUser(functions, users)
const itemFunc = require('./itemFunc').updateItem(functions, items)

// const f = require('./crudDB').CRUD(functions)

exports.api_onsale = functions.https.onRequest(onsaleFunc)
exports.api_user = functions.https.onRequest(userFunc)
exports.api_transaction = functions.https.onRequest(transactionFunc)
exports.api_item = functions.https.onRequest(itemFunc)
