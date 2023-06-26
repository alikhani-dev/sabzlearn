import CourseBoxesItem from './Course-Boxes-Item'
import courseBoxes from '../../../../data/courseBoxes'

const CourseBoxes: React.FC = () => {
	return (
		<div className='course-boxes'>
			<div className='row'>
				{courseBoxes.map(box => (
					<CourseBoxesItem key={box.id} {...box} />
				))}
			</div>
		</div>
	)
}

export default CourseBoxes
