const express = require('express')
const h3 = require('h3-js')
const cors = require('cors')

const app = express()
const port = 3300

app.use(cors())

app.get("/h3/geo/:hexId", (req, res, next) => {
 const hexId = req.params.hexId
 const geo = h3.h3ToGeo(hexId)	
 const response = {
   hexagonId: hexId,
   latlong: geo
 }
 res.json(response);
});

app.listen(port, () => {
   console.log("Server running in port: " + port)
})
