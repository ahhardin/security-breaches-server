var express = require('express');
var router = express.Router();
const axios = require('axios').default

/* GET home page. */
router.get('/breaches', async function(req, res) {
  const email = req.query.email
  if (!email) {
    res.status(400)
    res.send({error: 'email address query param required'})
  }
  const headers = {
    'hibp-api-key': '11a561d02d894b5ba7239d6d1500e73a'
  }
  const url = `https://haveibeenpwned.com/api/v3/breachedaccount/${encodeURIComponent(email)}?truncateResponse=false`
  let breachData = await axios(url, {headers})
  res.send(breachData.data)
});

module.exports = router;
