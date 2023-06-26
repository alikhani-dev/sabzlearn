import BreadcrumbItem from './Breadcrumb-Item'
import './breadcrumb.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Breadcrumb: React.FC = () => {
	return (
		<section className='breadcrumb'>
			<div className='container'>
				<div className='breadcrumb__content'>
					<div className='breadcrumb__home-content-icon'>
						<FontAwesomeIcon icon={faHome} className='breadcrumb__home-icon' />
					</div>
					<ul className='breadcrumb__list'>
						<BreadcrumbItem name='خانه' to='/' />
						<BreadcrumbItem name='آموزش برنامه نویسی فرانت اند' to='/' />
						<BreadcrumbItem name='دوره متخصص جاوا اسکریپت' to='/' isLastItem />
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Breadcrumb
