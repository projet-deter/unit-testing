const express = require('express');
const router = express.Router();

const Teachers = require('../Models/Teacher');


router.get('/', (req, res) => {

    Promise
        .resolve()
        .then(() => Teachers.find())
        .then(teachers => res.send(teachers))
        .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
    const id = req.params.id

    Promise
        .resolve()
        .then(() => Teachers.findById(id))
        .then(teacher => res.send(teacher))
        .catch(err => res.send(err));
});

router.post( '/', ( req, res, next ) => {
    Promise
        .resolve()
        .then(() => {
            if ( !( req.body.firstname
                && req.body.lastname) ) {
                throw new Error( 'All fields are required' );
            }
        })
        .then(() => {
            let teacher = new Teachers(req.body)
            return teacher.save()
        })
        .then( user => res.json( user ) )
        .catch(err => {
            console.log(err)
            return next
        })
});

router.delete( '/:id', ( req, res, next ) => {
    const id = req.params.id

    Promise
        .resolve()
        .then(() => Teachers.remove({ _id: id }).exec())
        .then(() => res.json({ action: true }))
        .catch(next)
});

module.exports = router;
