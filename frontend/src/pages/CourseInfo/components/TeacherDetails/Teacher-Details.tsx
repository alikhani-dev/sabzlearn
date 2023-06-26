import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const TeacherDetails: React.FC = () => {
	return (
		<div className='techer-details'>
			<div className='techer-details__header'>
				<div className='techer-details__header-right'>
					<img src='/images/info/teacher.webp' alt='Teacher Profile' className='techer-details__header-img' />
					<div className='techer-details__header-titles'>
						<Link to='/' className='techer-details__header-link'>
							محمدامین سعیدی راد
						</Link>
						<span className='techer-details__header-skill'>Front End &amp; Back End Developer</span>
					</div>
				</div>
				<div className='techer-details__header-left'>
					<FontAwesomeIcon icon={faChalkboardTeacher} className='techer-details__header-icon' />
					<span className='techer-details__header-name'>مدرس</span>
				</div>
			</div>
			<p className='techer-details__footer'>
				اول از همه برنامه نویسی اندروید رو شروع کردم و نزدیک به 2 سال با زبان جاوا اندروید کار میکردم .بعد تصمیم
				گرفتم در زمینه وب فعالیت داشته باشم.و..
			</p>
		</div>
	)
}

export default TeacherDetails
