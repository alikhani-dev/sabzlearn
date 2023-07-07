import { faArrowLeft, faChalkboardTeacher, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CoursesResponse } from '../../api/courses.api'
import { toFarsiNumber } from '../../helper/number'
import { CircleSpinner, StarRating } from '..'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './CourseBox.css'

const CourseBox: React.FC<CoursesResponse> = ({ cover, creator, name, price, shortName }) => {
	const [loader, setLoader] = useState(false)
	const onImageLoaded = () => setLoader(true)

	return (
		<div className='col-4'>
			<div className='course-box'>
				<Link to={`/course-info/${shortName}`}>
					<img
						src={cover}
						alt='Course img'
						className='course-box__img'
						onLoad={onImageLoaded}
						width={300}
						height={200}
					/>
					{!loader && <CircleSpinner />}
				</Link>
				<div className='course-box__main'>
					<Link to='/' className='course-box__title'>
						{name}
					</Link>
					<div className='course-box__rating-teacher'>
						<div className='course-box__teacher'>
							<FontAwesomeIcon icon={faChalkboardTeacher} className='course-box__teacher-icon' />
							<Link to='/' className='course-box__teacher-link'>
								{creator}
							</Link>
						</div>
						<StarRating rating={4} />
					</div>
					<div className='course-box__status'>
						<div className='course-box__users'>
							<FontAwesomeIcon icon={faUser} className='course-box__users-icon' />
							<span className='course-box__users-text'>{toFarsiNumber(1)}</span>
						</div>
						<span className='course-box__price'>{toFarsiNumber(+price)}</span>
					</div>
				</div>
				<div className='course-box__footer'>
					<Link to={`/course-info/${shortName}`} className='course-box__footer-link'>
						مشاهده اطلاعات
						<FontAwesomeIcon icon={faArrowLeft} className='course-box__footer-icon' />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CourseBox
