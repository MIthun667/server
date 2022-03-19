const express = require('express');
const mongoose = require("mongoose");
const env = require('dotenv').config();
const Appointment = require('./Appointment');
const cors = require('cors');
const Contact = require('./Contact');

// const port = process.env.PORT || 5000

const app = express();
app.use(cors());

app.use(express.json());

// console.log(process.env)
mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mithun.q774e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.get('/appointments', async (request, response) =>{
  const email = request.query.email;
  const date = new Date(request.query.date).toLocaleDateString();
  const query = {email: email, date: date};
  console.log(query);
  const cursor = Appointment.find(query);
  const appointments = await cursor;
  response.json(appointments);
})

app.post("/appointments", async (request, response) => {
    const appointment = new Appointment(request.body);
    try {
      await appointment.save();  
      response.send(appointment);
    } catch (error) {
      response.status(500).send(error);
    }
  });
app.post('/contactInfos', async(request, response)=>{
  const contact = new Contact(request.body);
  try{
    await contact.save();
    response.send(contact);
  } catch (error) {
    response.status(500).send(error);
  }
})

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});




























// const app = express();
// const cors = require('cors');
// require('dotenv').config({path: "path/to/.env"});
// const { MongoClient } = require('mongodb');

// const port = process.env.PORT || 5000

// app.use(cors());
// app.use(express.json())

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mithun.q774e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// const client = new MongoClient(uri, { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
// });



// app.get('/appointments', async (req, res) => {
    
//     client.connect(err =>{
//         console.log("Mongodb is connected successfully")
//     });

//     const database = client.db('doctors-portal')
//     const appointmentCollection = database.collection('appointments');
    
//     const appointment = {
//         name: 'shoikot'
//     };
//     const result = await appointmentCollection.insertOne(appointment);
//     console.log(appointment);
//     res.json(result);
// });


// app.get('/', function (req, res) {
//     res.send('hello Doctors portal! ');
// });

// app.listen(port, () => {
//     console.log(`server is runnnning on http://localhost: ${port}`)
// });