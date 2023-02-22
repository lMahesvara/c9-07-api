import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import { KEYSECRETTOKEN } from '../config.js'
import bcrypt from 'bcrypt'

export const loginController = async (req, res) => {
  try {
    const email = req.body.email
    const password = req.body.password

    if (!email) return res.json({ error: true, msg: 'Email no ingresado' })
    if (!password)
      return res.json({ error: true, msg: 'Contraseña no ingresada' })

    let userFound = await User.findOne({ email: email })
    if (!userFound)
      return res.json({ error: true, msg: 'El usuario no existe' })

    const result = bcrypt.compareSync(password.toString(), userFound.password)
    if (!result) return res.json({ error: true, msg: 'Contraseña incorrecta' })

    var token = jwt.sign({ user: userFound.user }, KEYSECRETTOKEN, {
      expiresIn: 300,
    })

    return res.json({
      error: false,
      msg: {
        username: userFound.user,
        token,
      },
    })
  } catch (error) {
    res.json({ error: true, msg: 'Error de servidor' })
  }
}
