import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Course-Boxes-Item.css'

type Props = {
	title: string
	subtitle: string
	icon: IconProp
}

const CourseBoxesItem: React.FC<Props> = ({ subtitle, title, icon }) => {
	return (
		<div className='col-4'>
			<div className='course-boxes__box'>
				<div className='course-boxes__box-right'>
					<FontAwesomeIcon icon={icon} className='course-boxes__box-right-icon' />
				</div>
				<div className='course-boxes__box-left'>
					<span className='course-boxes__box-left-title'>{title}</span>
					<span className='course-boxes__box-left--subtitle'>{subtitle}</span>
				</div>
			</div>
		</div>
	)
}

export default CourseBoxesItem
