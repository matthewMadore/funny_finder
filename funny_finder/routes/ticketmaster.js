const express = require('express');
const axios = require('axios');
const router = express.Router();
const ticketmasterKey = process.env.TM_API_KEY

const fetchTicketmasterEvents = async (req, res) => {
  try {
    const response = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=${ticketmasterKey}`,
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching events from Ticketmaster API' });
  }
};

router.get('/', fetchTicketmasterEvents);

module.exports = router;