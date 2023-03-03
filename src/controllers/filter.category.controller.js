import Product from '../models/product.model.js'

const filterCategoryController = async (req, res) => {
  try {
    console.log(req.body)
    const productFilter = await Product.find({
      [req.body.type]: req.body.value,
    })
    return res.json({
      error: false,
      msg: productFilter,
    })
  } catch (error) {
    res.json({ error: true, msg: 'Error de servidor' })
  }
}

export default filterCategoryController
