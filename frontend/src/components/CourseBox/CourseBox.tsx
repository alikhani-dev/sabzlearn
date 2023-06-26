import { faArrowLeft, faChalkboardTeacher, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CircleSpinner, StarRating } from '..'
import { toFarsiNumber } from '../../helper/number'
import './CourseBox.css'

type Props = {
	image: string
	users: number
	name: string
	rating: number
	price: number
	teacher: string
	toCourse: string
	toProfile: string
}

const CourseBox: React.FC<Props> = ({ name, teacher, rating, toCourse, toProfile, price, users, image }) => {
	const [loader, setLoader] = useState(false)

	const onImageLoaded = () => setLoader(true)

	return (
		<div className='col-4'>
			<div className='course-box'>
				<Link to='/'>
					<img src={image} alt='Course img' className='course-box__img' onLoad={onImageLoaded} />
					{!loader && <CircleSpinner />}
				</Link>
				<div className='course-box__main'>
					<Link to='/' className='course-box__title'>
						{name}
					</Link>
					<div className='course-box__rating-teacher'>
						<div className='course-box__teacher'>
							<FontAwesomeIcon icon={faChalkboardTeacher} className='course-box__teacher-icon' />
							<Link to={toProfile} className='course-box__teacher-link'>
								{teacher}
							</Link>
						</div>
						<StarRating rating={rating} />
					</div>
					<div className='course-box__status'>
						<div className='course-box__users'>
							<FontAwesomeIcon icon={faUser} className='course-box__users-icon' />
							<span className='course-box__users-text'>{toFarsiNumber(users)}</span>
						</div>
						<span className='course-box__price'>{toFarsiNumber(price)}</span>
					</div>
				</div>
				<div className='course-box__footer'>
					<Link to={toCourse} className='course-box__footer-link'>
						مشاهده اطلاعات
						<FontAwesomeIcon icon={faArrowLeft} className='course-box__footer-icon' />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CourseBox
