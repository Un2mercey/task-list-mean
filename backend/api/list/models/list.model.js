const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    isCompleted: {
        type: Boolean,
        required: false,
        default: false
    }
});

const List = mongoose.model('List', ListSchema);

module.exports = { List };
