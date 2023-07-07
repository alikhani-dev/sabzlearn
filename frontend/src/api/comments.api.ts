import api from '../services/api'
import endpoint from '../services/endpoint'

type CommentPost = {
	body: string
	score: string
	courseShortName: string
}

type CommentPostResponse = {
	__v: number
	_id: string
	body: string
	course: string
	creator: string
	createAt: string
	updatedAt: string
}

export const commentPostApi = async (data: CommentPost) => {
	const response = await api.post(endpoint.comments.add, data)
	return response.data as CommentPostResponse
}
