const express = require('express')
const { getVideos, getVideo } = require('../controllers/video')
const router = express.Router()

router.route('/videos').get(getVideos)
router.route('/videos/:id').get(getVideo)

module.exports = router
