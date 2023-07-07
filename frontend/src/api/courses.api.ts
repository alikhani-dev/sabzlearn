import api from '../services/api'
import endpoint from '../services/endpoint'

export type CourseByNameResponse = {
	_id: string
	name: string
	description: string
	cover: string
	shortName: string
	categoryID: {
		_id: string
		title: string
		createdAt: string
		updatedAt: string
		__v: number
	}
	creator: null
	createdAt: string
	updatedAt: string
	__v: number
	courseStudentsCount: number
	sessions: {
		_id: string
		title: string
		course: string
		createdAt: string
		updatedAt: string
		__v: number
	}[]
	comments: {
		_id: string
		body: string
		creator: {
			_id: string
			username: string
			email: string
			name: string
			role: 'ADMIN' | 'USER'
			createdAt: string
			updatedAt: string
			__v: number
			profile: string
			phone: string
		}
		createdAt: string
		updatedAt: string
		__v: number
		answer: number
		isAnswer: number
		score: number
		answerContent: {
			_id: string
			body: string
			course: string
			creator: {
				_id: string
				username: string
				email: string
				name: string
				role: string
				createdAt: 'ADMIN' | 'USER'
				updatedAt: string
				__v: number
				profile: string
				phone: string
			}
			answer: number
			isAnswer: number
			mainCommendID: string
			createdAt: string
			updatedAt: string
			__v: number
			score: number
		}
	}[]
	isUserRegisteredToThisCourse: false
}

export const courseByNameApi = async (name: string) => {
	const { data } = await api.get(endpoint.course.one.replace(':shortName', name))
	return data as CourseByNameResponse
}

// * -----------------------------------------------------------------------

export type CoursesResponse = {
	_id: string
	name: string
	description: string
	cover: string
	shortName: string
	categoryID: string
	creator: null
	createdAt: string
	updatedAt: string
	__v: number
	support: string
	price: string
}

export const coursesAllApi = async () => {
	const { data } = await api.get(endpoint.course.all)
	return data as CoursesResponse[]
}

// * -----------------------------------------------------------------------

type CoursesSessionResponse = {
	_id: string
	title: string
	course: {
		_id: string
		name: string
	}
	createdAt: string
	updatedAt: string
	__v: number
}

export const coursesSessionApi = async () => {
	const { data } = await api.get(endpoint.course.sessions)
	return data as CoursesSessionResponse[]
}

// * -----------------------------------------------------------------------

type CoursesRelatedResponse = {
	_id: string
	name: string
	description: string
	cover: string
	shortName: string
	categoryID: string
	creator: string
	createdAt: string
	updatedAt: string
	__v: number
}

export const coursesRelatedApi = async () => {
	const { data } = await api.get(endpoint.course.sessions)
	return data as CoursesRelatedResponse[]
}
