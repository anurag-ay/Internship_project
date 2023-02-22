const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Payment Form</title>
      </head>
      <body>
        <h1>Payment Form</h1>

        <h2>Order Summary</h2>
        <p>Product Name: <span id="productName"></span></p>
        <p>Price: $<span id="price"></span></p>
        <p>Order ID: <span id="orderID"></span></p>
        <p>Date: <span id="date"></span></p>

        <h2>Payment Information</h2>
        <form action="/process-payment" method="post">
          <label for="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber"><br>

          <label for="expDate">Expiration Date:</label>
          <input type="text" id="expDate" name="expDate"><br>

          <label for="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv"><br>

          <label for="billingAddress">Billing Address:</label>
          <input type="text" id="billingAddress" name="billingAddress"><br>

          <input type="submit" value="Submit Payment">
        </form>

        <script>
          // Populate order summary section with data
          document.getElementById("productName").innerHTML = "Product Name";
          document.getElementById("price").innerHTML = "100";
          document.getElementById("orderID").innerHTML = "123456";
          document.getElementById("date").innerHTML = "February 22, 2023";
        </script>
      </body>
    </html>
  `);
});

app.post("/process-payment", (req, res) => {
  // Process payment logic goes here
  console.log("Payment processed successfully!");
  res.send("Payment processed successfully!");
});

app.listen(port, () => {
  console.log(`Payment form app listening at http://localhost:${port}`);
});
