const { User } = require('../models/usersModel')
const bcrypt = require('bcrypt')

const loginPost = async (req, res) => {
  const { email, password } = req.body

  const datos = await User.findOne({ email })
  console.log(datos)

  const userValidate =
    datos === null ? false : await bcrypt.compare(password, datos.password)

  if (userValidate === false) {
    return res.status(401).json({ error: 'usuario y password no encontrados' })
  }
  res.status(200).json({ message: `bienvenido ${datos.name}` })
}

module.exports = {
  loginPost
}
