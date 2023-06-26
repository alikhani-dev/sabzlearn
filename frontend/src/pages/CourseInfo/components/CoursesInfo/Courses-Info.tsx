import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faEye, faGraduationCap, faLink, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import coursesList from '../../../../data/coursesList'
import CoursesListItem from './Courses-List-Item'

const CoursesInfo: React.FC = () => {
	return (
		<div className='courses-info'>
			<div className='course-info'>
				<div className='course-info__register'>
					<span className='course-info__register-title'>
						<FontAwesomeIcon icon={faGraduationCap} className='course-info__register-icon' /> دانشجوی دوره
						هستید
					</span>
				</div>
			</div>
			<div className='course-info'>
				<div className='course-info__total'>
					<div className='course-info__top'>
						<div className='course-info__total-sale'>
							<FontAwesomeIcon icon={faUserGraduate} className='course-info__total-sale-icon' />{' '}
							<span className='course-info__total-sale-text'>تعداد دانشجو : </span>
							<span className='course-info__total-sale-number'>۱۷۸</span>
						</div>
					</div>
					<div className='course-info__bottom'>
						<div className='course-info__total-comment'>
							<FontAwesomeIcon icon={faComments} className='course-info__total-comment-icon' />
							<span className='course-info__total-comment-text'>۶۷ دیدگاه</span>
						</div>
						<div className='course-info__total-view'>
							<FontAwesomeIcon icon={faEye} className='course-info__total-view-icon' />
							<span className='course-info__total-view-text'>۱۴,۲۳۴ بازدید</span>
						</div>
					</div>
				</div>
			</div>
			<div className='course-info'>
				<div className='course-info__header-short-url'>
					<FontAwesomeIcon icon={faLink} className='course-info__short-url-icon' />
					<span className='course-info__short-url-text'>لینک کوتاه</span>
				</div>
				<span className='course-info__short-url'>https://sabzlearn.ir/?p=117472</span>
			</div>
			<div className='course-info'>
				<span className='course-info__topic-title'>سرفصل های دوره</span>
				<span className='course-info__topic-text'>
					برای مشاهده و یا دانلود دوره روی کلمه{' '}
					<Link to='/' style={{ color: 'blue', fontWeight: 'bold' }}>
						لینک
					</Link>{' '}
					کلیک کنید
				</span>
			</div>
			<div className='course-info'>
				<span className='course-info__courses-title'>دوره های مرتبط</span>
				<ul className='course-info__courses-list'>
					{coursesList.map(item => (
						<CoursesListItem key={item.id} {...item} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default CoursesInfo
