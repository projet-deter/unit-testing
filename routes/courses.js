const express = require('express');
const router = express.Router();


const Formation = require('../Models/Formation');
const Intern = require('../Models/Intern');
const Room = require('../Models/Room');
const Teacher = require('../Models/Teacher');
const Course = require('../Models/Course');


router.get('/', (req, res) => {

    Promise
        .resolve()
        .then(() => Course.find())
        .then(courses => res.send(courses))
        .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
    const id = req.params.id

    Promise
        .resolve()
        .then(() => Course.findById(id))
        .then(course => res.send(course))
        .catch(err => res.send(err));
});

router.post('/', (req, res) => {

    Promise
        .resolve()
        .then(() => {
            if ( !( req.body.room
                && req.body.teacher
                && req.body.formation
                && req.body.interns
                && req.body.begin
                && req.body.end) ) {
                throw new Error( 'All fields are required' );
            }
            else {
                let course = new Course(req.body)
                return course.save()
            }
        })
        .then( course => res.json( course ) )
        .catch(err => res.send(err));
});

router.delete( '/:id', ( req, res, next ) => {
    const id = req.params.id

    Promise
        .resolve()
        .then(() => Course.remove({ _id: id }).exec())
        .then(() => res.json({ action: true }))
        .catch(err => res.send(err));
});

module.exports = router;
