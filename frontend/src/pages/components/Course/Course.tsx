import courses from '../../../data/courses'
import { CourseBox, SectionHeader } from '../../../components'

const Course: React.FC = () => {
	return (
		<div className='courses'>
			<div className='container'>
				<SectionHeader
					title='جدیدترین دوره ها'
					description='سکوی پرتاپ شما به سمت موفقیت'
					link={{ text: 'تمامی دوره ها', to: '/courses' }}
				/>
				<div className='courses-content'>
					<div className='container'>
						<div className='row'>
							{courses.map(course => (
								<CourseBox key={course.image} {...course} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Course
