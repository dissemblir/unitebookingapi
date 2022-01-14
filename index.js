const express = require('express')
var cors = require('cors')
const app = express()
const port = 180

// Enable CORS for all routes
//app.use(cors());

// For parsing application/json
//app.use(express.json());
  
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.post('/booking', cors(), (req, res) => {
  res.send('Success - Submit');
  /** Response Types:
   * Success - Submit
   * Error - Submit
   * Error - Empty Submit
   * Error - Form
   * Error - Fully Booked
   * Error - uKids Fully Booked
   * Error - Booking Exist
   * Error - Insert
  */
  console.log("[+] ::: Request Received");
  console.log(req.body);
})

app.get('/', (req, res) => {
  res.send('Small minimal booking emulator for Unite180 bookings! CORS enabled for /booking')
})

app.listen(port, () => {
  console.log(`Unite180 booking emulator listening at http://localhost:${port}`)
})