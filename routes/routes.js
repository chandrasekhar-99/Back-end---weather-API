const router = require('express').Router();
const {weather} = require('../controller/controller');

router.get('/currentweather',weather);

module.exports= router;

