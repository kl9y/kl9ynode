const express = require('express');
var cors = require('cors');
const stripe = require('stripe')(process.env.skey);
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'store/public')));
app.use(express.json());

//app.get("/", (req, res) => {
 //   res.send("Hello, world!");
 // });
 app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'store/public/index.html'));
  });

app.post("/checkout", async (req, res) =>{

    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) =>{
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    })

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel: 'http://localhost:3000/cancel',
    });
    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, ()=> console.log("listening"));