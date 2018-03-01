var base_device = require('./base_device'),
		util = require('util')
		request = require('request-promise')
		moment = require('moment')
		CryptoJS = require("crypto-js");

function dash_device() {
	dash_device.super_.apply(this, arguments);

	this.name = 'dash';

	this.client_id = process.env.DASH_CLIENT_ID;
	this.client_secret = process.env.DASH_CLIENT_SECRET;

	this.endpoints = {
		oath: 'https://dash.by/api/auth/token',
		trips: 'https://dash.by/api/chassis/v1/trips',
		trip: '',
		user: '',
		vehicles: '',
	};
}

util.inherits(dash_device, base_device);

dash_device.prototype.getTrips = function (accessToken) { 
	return request({
		method: 'GET',
	    uri: this.endpoints.trips,
	    headers: { Authorization: `Bearer ${accessToken}` },
	    json: true
	});
};	


dash_device.prototype.createWebhookObject = function (type, device_user_id, device_vehicle_id, latitude, longitude, timestamp) {
	switch (type) {
		case 'ignition_off':
			obj = {
				payload: { 
					vehicleId: device_vehicle_id,
					latitude: latitude,
					longitude: longitude,
					date: moment(timestamp).utc().format()
				},
				eventType: 'ignition_off',
				userId: device_user_id
			};
			break;
		default:
			obj = {};
	}

	return obj;
};

dash_device.prototype.getSignatureHeader = function (obj) {	
	return { 'X-Dash-Signature': CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1('JSON.stringify(obj)', process.env.DASH_CLIENT_SECRET)) };
};


module.exports = dash_device;