'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var JobSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  company_name: {
    type: String,
    default: '',
    trim: true,
    required: 'Company Name cannot be blank'
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Job Title cannot be blank'
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  requirement: {
    type: String,
    default: '',
    trim: true
  },
  hourly_wage: {
    type: Number,
    default: '',
    trim: true
  },
  state: {
    type: String,
    default: '',
    trim: true,
    required: 'State Field is required'
    
  },
  contact_email: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Job', JobSchema);
