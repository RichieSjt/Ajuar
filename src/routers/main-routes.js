const express = require('express')

const router = new express.Router()

router.get('', (req, res) => {
    res.render('index', {
        active: { home: true }
    })
})

router.get('/home', (req, res) => {
    res.render('index', {
        active: { home: true }
    })
})

router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
        active: { nosotros: true }
    })
})

router.get('/catalogo', (req, res) => {
    res.render('catalogo', {
        active: { catalogo: true }
    })
})

router.get('/designs', (req, res) => {
    res.render('designs', {
        active: { designs: true }
    })
})

router.get('/contactanos', (req, res) => {
    res.render('contactanos', {
        active: { contactanos: true }
    })
})

// 404
router.get('*', (req, res) => {
    res.render('404',  {
        title: '404',
        message: 'Page not found'
    })
})

module.exports = router