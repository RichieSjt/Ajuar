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

// 404
router.get('*', (req, res) => {
    res.render('404',  {
        title: '404',
        message: 'Page not found'
    })
})

module.exports = router