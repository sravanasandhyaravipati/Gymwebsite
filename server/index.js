const express = require('express');

const app = express();


app.use(express.json());
const Phsentotp = require('./Routers/Phsentotp');
const Phverifyotp = require('./Routers/Phverifyotp');







app.use('/send-otp', Phsentotp);
app.use('/verify-otp', Phverifyotp);




app.listen(5000, () => console.log('Server running on port 5000'))