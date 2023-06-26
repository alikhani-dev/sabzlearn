import './CoursesInfo.css'
import CourseInfo from './CourseInfo'
import CourseInfoItem from './CourseInfoItem'
import SidebarArticlesItem from './SidebarArticlesItem'
import LastArticlesItem from './LastArticlesItem'

const coursesList = [
	{
		to: '/',
		text: 'پروژه های تخصصی با جاوا اسکریپت',
		src: '/images/courses/js_project.webp'
	},
	{ to: '/', text: 'تعیین قیمت پروژه های فریلنسری', src: '/images/courses/fareelancer.webp' },
	{ to: '/', text: 'دوره Api نویسی', src: '/images/courses/nodejs.webp' },
	{ to: '/', text: 'متخصص جنگو', src: '/images/courses/jango.webp' }
]

const links = [
	{ title: 'صفحه اصلی', to: '/' },
	{ title: 'فرانت اند', to: '/' },
	{ title: 'امنیت', to: '/' },
	{ title: 'پایتون', to: '/' },
	{ title: 'مهارت های نرم', to: '/' }
]

const CoursesInfo: React.FC = () => {
	return (
		<div className='courses-info'>
			<CourseInfo title='پر امتیازترین دوره ها'>
				<ul className='course-info__courses-list'>
					{coursesList.map((item, index) => (
						<CourseInfoItem key={index} {...item} />
					))}
				</ul>
			</CourseInfo>
			<CourseInfo title='دسترسی سریع'>
				<ul className='sidebar-articles__list'>
					{links.map((item, index) => (
						<SidebarArticlesItem key={index} {...item} />
					))}
				</ul>
			</CourseInfo>
			<CourseInfo title='دسته بندی مقالات'>
				<ul className='sidebar-articles__list'>
					{links.map((item, index) => (
						<LastArticlesItem key={index} {...item} />
					))}
				</ul>
			</CourseInfo>
			<CourseInfo title='دوره های جدید'>
				<ul className='sidebar-articles__list'>
					{links.map((item, index) => (
						<SidebarArticlesItem key={index} {...item} />
					))}
				</ul>
			</CourseInfo>
		</div>
	)
}

export default CoursesInfo
