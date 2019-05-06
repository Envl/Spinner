const cors = require('cors')({origin: true});
exports.updateItem = (functions, items, collectionName) =>
  functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
      const id = req.query.id;
      switch (req.method) {
        case 'GET':
          return items
            .doc(id)
            .get()
            .then(doc => {
              let tempObj = doc.data();
              tempObj.id = id;
              return res
                .set('Access-Control-Allow-Origin', '*')
                .status(200)
                .json(tempObj);
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
                .set('Access-Control-Allow-Origin', '*')
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
                .set('Access-Control-Allow-Origin', '*')
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
                .set('Access-Control-Allow-Origin', '*')
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
    });
  });
