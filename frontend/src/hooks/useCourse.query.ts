import { useQuery } from '@tanstack/react-query'
import { courseByNameApi } from '../api/courses.api'
import endpoint from '../services/endpoint'

const useCoursesByNameQuery = (name: string) => {
	return useQuery({ queryFn: () => courseByNameApi(name), queryKey: [endpoint.course.one], enabled: !!name })
}

export const useCoursesQuery = {
	getByName: useCoursesByNameQuery
}

export default useCoursesQuery
