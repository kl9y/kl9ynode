const express = require('express');
var cors = require('cors');
//const stripe = require('stripe')(process.env.skey);
const stripe = require('stripe')(process.env.testkey);
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

  app.post("/checkout", async (req, res) => {
    try {
      const items = req.body.items;
      let lineItems = [];
      items.forEach((item) => {
        lineItems.push({
          price: item.id,
          quantity: item.quantity,
        });
      });

        if(lineItems.length >0){
          const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://kl9y.com/success',
            cancel_url: 'http://kl9y.com/cancel',
            currency: 'usd',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            automatic_tax: {
              enabled: true
            },
            shipping_address_collection: {
              allowed_countries: ['US', 'CA']
            },
            submit_type: 'pay',
          });
      
          res.send(JSON.stringify({
            url: session.url,
          }));
        }
        else{
          console.log("Empty Request.");
          }
      
    } catch (error) {
      console.error(error);
      res.status(500).send(JSON.stringify({
        error: 'An error occurred while processing the payment.',
      }));
    }
  });

app.listen(4000, ()=> console.log("listening"));