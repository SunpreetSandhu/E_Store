// sk_test_51MzDwFJ6ar54FA8lreztfJRebBaX9yFoWQlXyeXVplO9rwnYvN360eScn2tqmPYVpcJMFe1fJPko4dgOA3sEecq800jQFlXA8w

//coffee: price_1MzDySJ6ar54FA8lWCDechX0
//sunglasses: price_1MzDzSJ6ar54FA8lOeY71Mzr
//camera: price_1MzE0FJ6ar54FA8lgapF8oub
const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MzDwFJ6ar54FA8lreztfJRebBaX9yFoWQlXyeXVplO9rwnYvN360eScn2tqmPYVpcJMFe1fJPko4dgOA3sEecq800jQFlXA8w"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]
    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/Success",
    cancel_url: "http://localhost:3000/Cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("Listening on port 4000!"));
