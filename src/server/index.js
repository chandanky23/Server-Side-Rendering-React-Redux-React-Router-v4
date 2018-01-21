import express from 'express';
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {

    const store = createStore();

    res.send(renderer(req, store));
})

const port = 3333;
app.listen(port, () => {
    console.log('running on port : ', port);
})