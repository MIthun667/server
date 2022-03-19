const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: [true, "Please Enter Your Name"],
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: [false, 'Please Enter Your Phone Number'],
    maxlength: [11, 'Number cannot exceed 11 characters'],
  },
  time: {
    type: String,
    required: true
},
  date: {
    type: String,
    required: true
  },
  serviceName: {
    type: String,
    required: true,
    trim:true
  }
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;