const express = require('express')
const { getVideos, getVideo, addToPlaylist, createPlaylist } = require('../controllers/video')
const router = express.Router()
const { checkAuth } = require('../middlewares/checkAuth')

router.route('/videos').get(getVideos)
router.route('/videos/:videoID').get(getVideo)
router.route('/videos/createPlaylist/').post(checkAuth, createPlaylist)
router.route('/videos/addToPlaylist/').post(checkAuth, addToPlaylist)
module.exports = router
