const express = require('express');
const Event = require('../models/eventModel');

const findEvents = async (req, res) => {
    const events = await Event.find({});
    res.status(200).json(events);
}

const router = express.Router();

router.get('/', findEvents); // Pass the reference to findEvents, don't invoke it

module.exports = router;