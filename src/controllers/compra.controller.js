import Compra from '../models/compra.model.js'
import User from '../models/user.model.js'

export const compraController = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  try {
    const tipoEnvio = req.body.tipoEnvio
    const tipoPago = req.body.tipoPago
    const subtotal = req.body.subtotal
    const total = req.body.total
    const productos = req.body.productos
    const usuario = req.body.usuario

    if (!tipoEnvio)
      return res.json({ error: true, msg: 'Ingrese el tipo de envio' })
    if (!tipoPago)
      return res.json({ error: true, msg: 'Ingrese el tipo de pago' })
    if (!subtotal) return res.json({ error: true, msg: 'Ingrese el subtotal' })
    if (!total) return res.json({ error: true, msg: 'Ingrese el total' })
    if (!productos)
      return res.json({ error: true, msg: 'Ingrese los productos' })
    if (!usuario) return res.json({ error: true, msg: 'Ingrese el usuario' })

    const newCompra = new Compra({
      tipoEnvio,
      tipoPago,
      subtotal,
      total,
      productos,
      usuario,
    })
    const compraCreated = await newCompra.save()

    res.json({
      error: false,
      msg: {
        id: compraCreated._id,
      },
    })
  } catch (error) {
    return res.json({ error: true, msg: 'Error de servidor' })
  }
}

export const getCompraController = async (req, res) => {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const { id } = req.params

    if (!id) return res.json({ error: true, msg: 'Ingrese el id' })

    const compra = await Compra.findById(id)

    res.json({
      error: false,
      msg: compra,
    })
  } catch (error) {
    res.json({ error: true, msg: 'Error de servidor' })
  }
}
