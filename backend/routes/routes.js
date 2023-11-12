const express = require('express')
const router = express.Router()
const productosController = require('../controllers/productos.controller')
const uploadController = require('../controllers/upFile.controller')
const usuarioController = require('../controllers/usuario.controller')
const sessionController = require('../controllers/session.controller')
const mdJWT = require('../middleware/jwt')

const multer  = require('multer')
const upload = multer({ dest: 'public/' });


router.post('/crear-productos', mdJWT.verificarToken, productosController.crearProductos)
router.get('/obtener-productos', productosController.obtenerProductos)
router.get('/obtener-productosAct', productosController.obtenerProductosActivos)
router.get('/obtener-producto/:id', productosController.obtenerProducto)
router.delete('/eliminar-producto/:id', productosController.eliminarProducto)
router.put('/actualizar-producto/:id', productosController.actualizarProducto)


router.post('/cargar-archivo', upload.single("myFile"),  uploadController.upload)

router.post('/crear-usuarios', usuarioController.crearUsuarios)
router.get('/obtener-usuarios', usuarioController.obtenerUsuarios)
router.get('/obtener-usuario/:id', usuarioController.obtenerUsuario)

router.post('/login', sessionController.genToken)
router.post('/infotoken', sessionController.desencriptarToken)

module.exports = router
