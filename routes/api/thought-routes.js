const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughts-controller')

// api/thoughts
router
.route('/')
.get(getAllThought)
.post(addThought)

router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)


router
.route('/:thoughtId/reactions')
.post(addReaction)

router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction)


module.exports = router;