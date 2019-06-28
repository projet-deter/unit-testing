const express = require('express');
const router = express.Router();

const Formation = require('../Models/Formation');
const Intern = require('../Models/Intern');
const Room = require('../Models/Room');
const Teacher = require('../Models/Teacher');
const Course = require('../Models/Course');

router.get('/', (req, res) => {
    res.send({ wel: 'come'})
});

router.get('/populate', (req, res) => {

    Promise
        .resolve()
        .then(() => {


            let formation = new Formation({
                name: `Faire une API en PHP`,
                category: `PHP`,
                places : 35
            })

            let formation2 = new Formation({
                name: `Faire un jeu vidéo avec Unity`,
                category: `UNITY`,
                places : 15
            })

            let formation3 = new Formation({
                name: `Les frameworks JS`,
                category: `JS`,
                places : 100
            })

            let formation4 = new Formation({
                name: `Référencement naturel`,
                category: `SEO`,
                places : 35
            })

            let formation5 = new Formation({
                name: `Faire une fonction logarythmique`,
                category: `MATHS`,
                places : 10
            })

            let promises = [formation, formations2, formation3, formation4, formation5]

            return Promise.all(promises)
        })
        .then(() => res.json({ action: true }))
        .catch(err => res.send(err));
});

router.post('/login', (req, res) => {
    User.login(req.body.email, req.body.password)
        .then(data => {
            const token = createToken(data);
            res.status(201).send({token});
        })
        .catch(err => {
            console.log(err);
            if (err === "User not found" || err === "wrong password") {
                res.status(400).send({
                    error: 'Wrong user or password'
                });
            } else {
                res.status(500).send({
                    error: 'Oops ! Something went wrong !'
                })
            }
        });
});

module.exports = router;
