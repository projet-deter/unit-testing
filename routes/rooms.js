const express = require('express');
const router = express.Router();
const Room = require('../Models/Room');


router.get('/', (req, res) => {

    Promise
        .resolve()
        .then(() => Room.find())
        .then(room => res.send(room))
        .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
    const id = req.params.id

    Promise
        .resolve()
        .then(() => Room.findById(id))
        .then(room => res.send(room))
        .catch(err => res.send(err));
});

router.post('/', (req, res) => {

    Promise
        .resolve()
        .then(() => {
            if ( !( req.body.title
                && req.body.description) ) {
                throw new Error( 'All fields are required' );
            }
            else {
                let room = new Room(req.body)
                return room.save()
            }
        })
        .then( room => res.json( room ) )
        .catch(err => res.send(err));
});

router.delete( '/:id', ( req, res, next ) => {
    const id = req.params.id

    Promise
        .resolve()
        .then(() => Room.remove({ _id: id }).exec())
        .then(() => res.json({ action: true }))
        .catch(err => res.send(err));
});

module.exports = router;
