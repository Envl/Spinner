exports.updateItem = (functions, items, collectionName) =>
  functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    if (req.method === 'OPTIONS') {
      // Send response to OPTIONS requests
      res.set('Access-Control-Allow-Methods', 'GET')
      res.set('Access-Control-Allow-Headers', 'Content-Type')
      res.set('Access-Control-Max-Age', '3600')
      res.status(204).send('')
    } else {
      const id = req.query.id
      switch (req.method) {
        case 'GET':
          return items
            .doc(id)
            .get()
            .then(doc => {
              let tempObj = doc.data()
              tempObj.id = id
              return res.status(200).json(tempObj)
            })
            .catch(error => {
              return res.status(error.code).json({
                message: `Something went wrong. ${error.message}`
              })
            })
          break
        case 'POST':
          let item = req.body
          return items
            .add(item)
            .then(doc => {
              return res
                .status(200)
                .json({message: `Succesfully create new document ${doc.id}`})
            })
            .catch(error => {
              return res.status(error.code).json({
                message: `Something went wrong. ${error.message}`
              })
            })

          break
        case 'PUT':
          let updateItem = req.body
          return items
            .doc(req.query.id)
            .update(updateItem)
            .then(() => {
              return res
                .status(200)
                .json({message: `Succesfully update document`})
            })
            .catch(error => {
              return res.status(error.code).json({
                message: `Something went wrong. ${error.message}`
              })
            })

          break
        case 'DELETE':
          return items
            .doc(id)
            .delete()
            .then(() => {
              return res
                .status(200)
                .json({message: 'Succesfully delete document'})
            })
            .catch(error => {
              return res.status(error.code).json({
                message: `Something went wrong. ${error.message}`
              })
            })
          break
        default:
          return res.status(404).json({
            message: `Request not found. ${error.message}`
          })
          break
      }
    }
  })
