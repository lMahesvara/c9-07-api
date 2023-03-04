import mongoose from 'mongoose'

const CompraSchema = mongoose.Schema({
  tipoEnvio: {
    type: Object,
  },
  tipoPago: {
    type: String,
  },
  subtotal: {
    type: Number,
  },
  total: {
    type: Number,
  },
  productos: {
    type: Array,
  },
  usuario: {
    type: String,
  },
})

const Compra = mongoose.model('compra', CompraSchema)

export default Compra
