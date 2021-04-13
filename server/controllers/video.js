const { videos } = require('./../lib/videos')

exports.getVideos = async (req, res, next) => {
	res.status(200).json({
		success: true,
		data: videos,
		code: 'VIDEOS_FOUND',
	})
}
exports.getVideo = async (req, res, next) => {
	const { id } = req.params
	const found = (id) => videos.find((video) => video.id === id)
	const video = found(id)
	if (!video) {
		return res.status(404).json({
			success: false,
			msg: 'Requested video was not found',
			code: 'VIDEO_NOT_FOUND',
		})
	}
	res.status(200).json({
		msg: 'Video found',
		data: video,
		code: 'VIDEO_FOUND',
		success: true,
	})
}
