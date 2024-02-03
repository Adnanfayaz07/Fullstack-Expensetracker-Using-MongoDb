const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose')
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Routes imported
const userRoute = require('./Routes/user');
const expenseRoute = require('./Routes/expense');
const purchaseRoute = require('./Routes/purchase');
const premiumRoute = require('./Routes/premium');
const passwordRoute = require('./Routes/password');



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/user', userRoute);
app.use('/expense', expenseRoute);
app.use('/purchase', purchaseRoute);
app.use('/premium', premiumRoute);
app.use('/password', passwordRoute);

app.use((req, res) => {
    res.sendFile(path.join(__dirname, `Public/${req.url}` ));
});


mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to mongoose')
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    })
  })
  .catch((err) => {
    console.log('Error in connection', err)
  })