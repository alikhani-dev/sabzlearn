import { CourseBoxes, CourseProgress, CoursesInfo, Introduction, TeacherDetails } from './components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { Breadcrumb } from '../../components'
import { Footer, Header } from '../../layout'
import { Link } from 'react-router-dom'
import './CourseInfo.css'

const CourseInfo: React.FC = () => {
	return (
		<>
			<Header />
			<Breadcrumb />
			<section className='course-info'>
				<div className='container'>
					<div className='row'>
						<div className='col-6'>
							<Link to='/' className='course-info__link'>
								آموزش برنامه نویسی فرانت اند
							</Link>
							<h1 className='course-info__title'>آموزش 20 کتابخانه جاوااسکریپت برای بازار کار</h1>
							<p className='course-info__text'>
								امروزه کتابخانه‌ها کد نویسی را خیلی آسان و لذت بخش تر کرده اند. به قدری که حتی امروزه
								هیچ شرکت برنامه نویسی پروژه های خود را با Vanilla Js پیاده سازی نمی کند و همیشه از
								کتابخانه ها و فریمورک های موجود استفاده می کند. پس شما هم اگه میخواید یک برنامه نویس
								عالی فرانت اند باشید، باید کتابخانه های کاربردی که در بازار کار استفاده می شوند را به
								خوبی بلد باشید
							</p>
							<div className='course-info__social-media'>
								<Link to='/' className='course-info__social-media-item'>
									<FontAwesomeIcon icon={faShare} className='course-info__icon' />
								</Link>
								<Link to='/' className='course-info__social-media-item'>
									<FontAwesomeIcon icon={faShare} className='course-info__icon' />
								</Link>
								<Link to='/' className='course-info__social-media-item'>
									<FontAwesomeIcon icon={faShare} className='course-info__icon' />
								</Link>
							</div>
						</div>
						<div className='col-6'>
							<video poster='/images/courses/js_project.webp' className='course-info__video' controls />
						</div>
					</div>
				</div>
			</section>
			<main className='main'>
				<div className='container'>
					<div className='row'>
						<div className='col-8'>
							<div className='course'>
								<CourseBoxes />
								<CourseProgress progress={10} />
								<Introduction />
								<TeacherDetails />
							</div>
						</div>
						<div className='col-4'>
							<CoursesInfo />
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default CourseInfo
