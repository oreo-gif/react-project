const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Add text']
    },
    amount:{
        type: Number,
        required: [true, 'Enter a positive or negative number']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Transaction',TransactionSchema);