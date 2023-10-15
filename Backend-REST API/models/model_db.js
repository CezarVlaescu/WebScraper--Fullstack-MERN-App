// Database models

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scrapingSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    },
    words: {
        type: Number,
        require: true
    },
    sentiment: {
        type: String,
        required: true
    }
}, {timestamps: true, bufferCommands: false });

const scrapingArticle = mongoose.model('scrapingArticle', scrapingSchema);

module.exports = scrapingArticle;