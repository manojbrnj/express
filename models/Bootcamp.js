const mongoose = require('mongoose');
const Bootcampschema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters'],
  },
  slug: {
    type: String,
  },
  description: {
    type: String,
    require: [true, 'Please add a description'],
    unique: true,
    trim: true,
    maxlength: [500, 'Name can not be more than 500 characters'],
  },
  website: {
    type: String,
    match: [
      /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URl with HTTP or HTTPS',
    ],
  },
  email: {
    type: String,
    match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'please add a valid email'],
  },
  address: {
    type: String,
    required: [true, 'Please add an address'],
  },
  location: {
    location: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
        required: false,
      },
      coordinates: {
        type: [Number],
        required: false,
        index: '2dsphere',
      },
      formattedAddress: String,
      street: String,
      city: String,
      zipcode: String,
      conuntry: String,
    },
  },
  careers: {
    type: [String],
    required: true,
    enum: [
      'Mobile Development',
      'Web Development',
      'Data Science',
      'Business',
      'Others',
    ],
  },
  housing: {
    type: Boolean,
    default: false,
  },
  jobAssistance: {
    type: Boolean,
    default: false,
  },
  jobGuarantee: {
    type: Boolean,
    default: false,
  },
  acceptGi: {
    type: Boolean,
    default: false,
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [10, 'Rating must can not be more than 10'],
  },
  averageCost: Number,
  photo: {
    type: String,
    default: 'no-photo.jpg',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Bootcamp', Bootcampschema);
