import Product from '../models/product.model.js'

export const getProductController = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) {
      const products = await Product.find()
      return res.json({
        error: false,
        msg: products,
      })
    }

    const product = await Product.findById(id)
    return res.json({
      error: false,
      msg: product,
    })
  } catch (error) {
    res.json({ error: true, msg: 'Error de servidor' })
  }
}
