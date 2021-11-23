const express = require('express');
const app = express();

app.get('/api/getItems/:type', (req, res) => {
    const fruits = ['Mango', 'Peach', 'Grapes', 'Strawberry', 'Orange'];
    const veggies = ['Brocolli', 'Lettuce', 'Carrot', 'Potato', 'Cabbage'];
    const type = req.params.type.toLowerCase();

    if (type === 'fruits') {
        res.send(fruits);
    } else if (type === 'vegetables') {
        res.send(veggies);
    } else {
        res.send(`No items for ${type}`);
    }
});

app.listen(3000, () => console.log('Listening on port 3000...'));