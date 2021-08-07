var express = require('express');
var router = express.Router();
const axios = require('axios').default

/* GET home page. */
router.get('/breaches', async function(req, res, next) {
  const headers = {
    'hibp-api-key': '11a561d02d894b5ba7239d6d1500e73a'
  }
  const email = 'ahhardin@gmail.com'
  const url = `https://haveibeenpwned.com/api/v3/breachedaccount/${email}?truncateResponse=false`
  let breachData = await axios(url, {headers})
  res.send(breachData.data)
});

module.exports = router;
