import { Link } from 'react-router-dom'

type Props = { to: string; text: string; src: string }

const CourseInfoItem: React.FC<Props> = ({ to, text, src }) => {
	return (
		<li className='course-info__courses-list-item'>
			<Link to={to} className='course-info__courses-link'>
				<img src={src} alt='Course Cover' className='course-info__courses-img' />
				<span className='course-info__courses-text'>{text}</span>
			</Link>
		</li>
	)
}

export default CourseInfoItem
