var express = require('express');
var router = express.Router();
var request = require('request-promise');
var deviceAdapter = require('../lib/deviceAdapter');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST simulated webhook. */
router.post('/simulate_webhook', function(req, res, next) {
	var device = deviceAdapter.getDevice(req.body.device);
	var params = device.createWebhookObject('ignition_off', req.body.userId, req.body.vehicleId, req.body.lat, req.body.lon);
	var headers = device.getSignatureHeader(params);
console.log(headers)
	request({
		method: 'POST',
	  uri: req.body.endpoint,
	  headers: headers,
	  body: params,
	  json: true
	})

	.then(function(body) {
		res.status(200).json({message:'Webhook sent'});	
	})
	.catch(function (err) {
		res.status(500).send(err);	
  });
	
});

module.exports = router;
