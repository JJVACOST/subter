const fs = require('node:fs')

exports.upload = async (req, res) => {
    try {
       
        console.log(req.file)

        let formaArchivo = req.file.originalname.split(".")
        let extension = formaArchivo[formaArchivo.length-1]
   

        const newfile = req.file.filename+"."+extension;
        
        const newpath =  `public\\${newfile}`
        
        req.file.filename = newfile
        
        fs.renameSync(req.file.path , newpath) 
        
        
        res.json({archivo:  newfile });

    } catch (error) {
        console.log(error)
        res.status(502).send('Ups ocurrio una vaina, pilas ahi!!😒')
    }
}
