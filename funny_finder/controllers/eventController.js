const Event = require('../models/eventModel')

const findEvents = async (req, res) => {
    const events = await Event.find({})

    res.status(200).json(events)
}

