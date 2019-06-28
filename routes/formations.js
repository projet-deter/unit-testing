const express = require('express');
const router = express.Router();
const Formation = require('../Models/Formation');

router.get('/', (req, res) => {

    Promise
        .resolve()
        .then(() => Formation.find())
        .then(formation => res.send(formation))
        .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
    const id = req.params.id

    Promise
        .resolve()
        .then(() => Formation.findById(id))
        .then(formation => res.send(formation))
        .catch(err => res.send(err));
});

router.post('/', (req, res) => {

    Promise
        .resolve()
        .then(() => {
            if ( !( req.body.name
                && req.body.category  && req.body.places) ) {
                throw new Error( 'All fields are required' );
            }
            else {
                let room = new Formation(req.body)
                return room.save()
            }
        })
        .then( formation => res.json( formation ) )
        .catch(err => res.send(err));
});

router.delete( '/:id', ( req, res, next ) => {
    const id = req.params.id

    Promise
        .resolve()
        .then(() => Formation.remove({ _id: id }).exec())
        .then(() => res.json({ action: true }))
        .catch(err => res.send(err));
});

module.exports = router;
