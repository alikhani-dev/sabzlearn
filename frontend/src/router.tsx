import { createBrowserRouter } from 'react-router-dom'
import { Blog, Category, CourseInfo, Courses, Home, Login, NotFound, Register } from './pages'

const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '*', element: <NotFound /> },
	{ path: '/login', element: <Login /> },
	{ path: '/blog/:id', element: <Blog /> },
	{ path: '/courses', element: <Courses /> },
	{ path: '/register', element: <Register /> },
	{ path: '/category/:id', element: <Category /> },
	{ path: '/course-info/:id', element: <CourseInfo /> }
])

export default router
