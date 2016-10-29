'use strict';
// Defining a Schema
// http://mongoosejs.com/docs/guide.html
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// camelStyle
var bookSchema = new Schema({
    title:  String,
    keywords: Array,
    published: Boolean,
    published: { 
        type: Date, 
        default: Date.now 
    },
    author: {
        type: Schema.Objectld,
        ref: 'User'
    },
    detail: {
        modelNumber: Number,
        hardcover: Boolean,
        reviews: Number,
        rank: Number
    }
});

module.exports = mongoose.model('Book', bookSchema);

/*
// camelStyle
var bookSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ 
        body: String, 
        date: Date 
    }],
    date: { 
        type: Date, 
        default: Date.now 
    },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});
*/