import { Link } from 'react-router-dom'

type Props = { to: string; image: string; title: string }

const CoursesListItem: React.FC<Props> = ({ to, image, title }) => {
	return (
		<li className='course-info__courses-list-item'>
			<Link to={to} className='course-info__courses-link'>
				<img src={image} alt='Course Cover' className='course-info__courses-img' />
				<span className='course-info__courses-text'>{title}</span>
			</Link>
		</li>
	)
}

export default CoursesListItem
