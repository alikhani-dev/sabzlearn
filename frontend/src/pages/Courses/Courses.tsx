import { Footer, Header } from '../../layout'
import { Breadcrumb, CourseBox, Pagination } from '../../components'
import courses from '../../data/courses'

const Courses: React.FC = () => {
	return (
		<>
			<Header />
			<Breadcrumb />
			<section className='courses'>
				<div className='container'>
					<div className='courses-content'>
						<div className='container'>
							<div className='row'>
								{courses.map(course => (
									<CourseBox key={course.image} {...course} />
								))}
							</div>
						</div>
					</div>
					<Pagination />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Courses
