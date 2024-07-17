const express = require('express');
var cors = require('cors');
const stripe = require('stripe')(process.env.skey);
//const stripe = require('stripe')(process.env.testkey);

const path = require('path');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'store/public')));
app.use(express.json());

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

        if(lineItems.length >0 && lineItems.length <21){
          const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://kalycards.com/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'http://kalycards.com/cart',
            currency: 'usd',
            payment_method_types: ['card', "cashapp", "amazon_pay"],
            billing_address_collection: 'auto',
            automatic_tax: {
              enabled: true
            },
            shipping_address_collection: {
              allowed_countries: ['US', 'CA']
            },
            shipping_options: [
              {
                shipping_rate: 'shr_1PYe5bCSLHJXbRq8BBHBC8KP', // STAMPS
              },
              {
                shipping_rate: 'shr_1PW7ucCSLHJXbRq8viXaOOGt', // USPS Ground Advantage
              },
              
            ],
            submit_type: 'pay',
            allow_promotion_codes: true,

            custom_fields: [
              {
                key: 'custom_text',
                label: {
                  type: 'custom',
                  custom: 'Customizations'
                },
                type: 'text',
                optional: true,
                
                
              },
            ],


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


app.get('/success', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
    const customerName = session.customer_details.name;
    res.send(JSON.stringify({
      custName: customerName,
      ordPrice: session.amount_total,
    }));
  } catch (error) {
    console.error(error);
    res.status(500).send(JSON.stringify({
      error: 'An error occurred while retrieving the customer name.',
    }));
  }
});


app.listen(4000, ()=> console.log("listening"));