const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre: {
        tpye: String,
        required: true
    },
    categoria: {
        type: String,
        requried: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Producto', ProductoSchema);