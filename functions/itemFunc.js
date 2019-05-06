const cors = require('cors')({origin: true});
exports.updateItem = (functions, items, collectionName) =>
  functions.https.onRequest((req, res) => {
<<<<<<< HEAD
    res.set('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
      // Send response to OPTIONS requests
      res.set('Access-Control-Allow-Methods', 'GET');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
    } else {
=======
    return cors(req, res, () => {
>>>>>>> firebase-index3
      const id = req.query.id;
      switch (req.method) {
        case 'GET':
          return items
            .doc(id)
            .get()
            .then(doc => {
              let tempObj = doc.data();
              tempObj.id = id;
<<<<<<< HEAD
              return res.status(200).json(tempObj);
=======
              return res
                .set('Access-Control-Allow-Origin', '*')
                .status(200)
                .json(tempObj);
>>>>>>> firebase-index3
            })
            .catch(error => {
              return res.status(error.code).json({
                message: `Something went wrong. ${error.message}`
              });
            });
          break;
        case 'POST':
          let item = req.body;
          return items
            .add(item)
            .then(doc => {
              return res
<<<<<<< HEAD
=======
                .set('Access-Control-Allow-Origin', '*')
>>>>>>> firebase-index3
                .status(200)
                .json({message: `Succesfully create new document ${doc.id}`});
            })
            .catch(error => {
              return res.status(error.code).json({
                message: `Something went wrong. ${error.message}`
              });
            });

          break;
        case 'PUT':
          let updateItem = req.body;
          return items
            .doc(req.query.id)
            .update(updateItem)
            .then(() => {
              return res
<<<<<<< HEAD
=======
                .set('Access-Control-Allow-Origin', '*')
>>>>>>> firebase-index3
                .status(200)
                .json({message: `Succesfully update document`});
            })
            .catch(error => {
              return res.status(error.code).json({
                message: `Something went wrong. ${error.message}`
              });
            });

          break;
        case 'DELETE':
          return items
            .doc(id)
            .delete()
            .then(() => {
              return res
<<<<<<< HEAD
=======
                .set('Access-Control-Allow-Origin', '*')
>>>>>>> firebase-index3
                .status(200)
                .json({message: 'Succesfully delete document'});
            })
            .catch(error => {
              return res.status(error.code).json({
                message: `Something went wrong. ${error.message}`
              });
            });
          break;
        default:
          return res.status(404).json({
            message: `Request not found. ${error.message}`
          });
          break;
      }
<<<<<<< HEAD
    }
=======
    });
>>>>>>> firebase-index3
  });
