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
              allowed_countries: ['AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MK', 'ML', 'MM', 'MN', 'MO', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SZ', 'TA', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW', 'ZZ']
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