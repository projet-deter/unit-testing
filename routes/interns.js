const express = require('express');
const router = express.Router();

const Intern = require('../Models/Intern');

router.get('/', (req, res) => {

    Promise
        .resolve()
        .then(() => Intern.find())
        .then(interns => res.send(interns))
        .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
    const id = req.params.id

    Promise
        .resolve()
        .then(() => Intern.findById(id))
        .then(intern => res.send(intern))
        .catch(err => res.send(err));
});

router.post('/', (req, res) => {

    Promise
        .resolve()
        .then(() => {
            if ( !( req.body.title
                && req.body.description
                && req.body.link
                && req.body.categories) ) {
                throw new Error( 'All fields are required' );
            }
            else {
                let intern = new Intern(req.body)
                return intern.save()
            }
        })
        .then( intern => res.json( intern ) )
        .catch(err => res.send(err));
});

router.delete( '/:id', ( req, res, next ) => {
    const id = req.params.id

    Promise
        .resolve()
        .then(() => Intern.remove({ _id: id }).exec())
        .then(() => res.json({ action: true }))
        .catch(err => res.send(err));
});

module.exports = router;
