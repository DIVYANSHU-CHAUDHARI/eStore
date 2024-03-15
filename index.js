const express = require('express');
const buyerRoutes = require('./src/routes/buyerRoutes');
const productRoutes = require('./src/routes/productRoutes');
const pincodeServiceabilityRoutes = require('./src/routes/pincodeServiceabilityRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

const db = require('./src/config/database');

db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

const app = express();
app.use(express.json());

app.use('/buyer', buyerRoutes);
app.use('/product', productRoutes);
app.use('/pincodeserviceability', pincodeServiceabilityRoutes);
app.use('/order', orderRoutes);

const PORT = 3000;

db.sync().then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(err => console.log("Error: " + err));
