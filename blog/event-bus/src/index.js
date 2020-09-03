import axios from 'axios';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(express.json());
app.use(cors());

const events = [];

app.get('/events', (req, res) => {
    res.send(events);
});

app.post('/events', (req, res) => {
    const event = req.body;
    events.push(event);
    axios.post('http://localhost:4000/events', event);
    axios.post('http://localhost:4001/events', event);
    axios.post('http://localhost:4002/events', event);
    axios.post('http://localhost:4003/events', event);

    res.send({ status: 'OK' });
});

app.listen(4005, () => {
    console.log('Listening on 4005')
});