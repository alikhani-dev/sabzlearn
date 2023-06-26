import {
	faCalendarDays,
	faCircleInfo,
	faClock,
	faGraduationCap,
	faPlay,
	faUserLarge
} from '@fortawesome/free-solid-svg-icons'

const courseBoxes = [
	{ id: 1, title: 'وضعیت دوره:', subtitle: 'به اتمام رسیده', icon: faGraduationCap },
	{ id: 2, title: 'مدت زمان دوره:', subtitle: '19 ساعت', icon: faClock },
	{ id: 3, title: 'آخرین بروزرسانی:', subtitle: '1401/03/02', icon: faCalendarDays },
	{ id: 4, title: 'روش پشتیبانی', subtitle: 'آنلاین', icon: faUserLarge },
	{ id: 5, title: 'پیش نیاز:', subtitle: 'HTML CSS', icon: faCircleInfo },
	{ id: 6, title: 'نوع مشاهده:', subtitle: 'ضبط شده / آنلاین', icon: faPlay }
]

export default courseBoxes
