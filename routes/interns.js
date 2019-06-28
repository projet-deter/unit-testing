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

// router.get( '/search', ( req, res, next ) => {
//     let limit = req.query.limit ? req.query.limit : 20
//     let page = req.query.page ? req.query.page - 1 : 0
//     let order = req.query.order || '-created_at'
//     let searchQuery = req.query.search || {}

//     Promise.resolve()
//       // On construit l'objet de recherche
//       .then( () => Intern.paramize( searchQuery || {} ) )
//       .then( search =>
//         Promise.all( [
//           // On compte le nombre d'annonces
//           // correspondant à la recherche
//           Intern.countDocuments( search ),
//           // On recherche les annonces
//           // correspondant à la recherche
//           Intern.find( search )
//             .limit( Number( limit ) )
//             .skip( page * Number( limit ) )
//             .sort( order ),
//         ] )
//       )
//       .then( ( [ count, list ] ) => {
//         // On retourne la liste
//         res.json(list)
//       } )
//       .catch( next )
//   } )


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
