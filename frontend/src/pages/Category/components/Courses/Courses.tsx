import { faAlignLeft, faAngleDown, faBorderAll, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import courses from '../../../../data/courses'
import { CourseBox, Pagination } from '../../../../components'

const Courses: React.FC = () => {
	return (
		<section className='courses'>
			<div className='container'>
				<div className='courses-top-bar'>
					<div className='courses-top-bar__right'>
						<div className='courses-top-bar__row-btn courses-top-bar__icon--active'>
							<FontAwesomeIcon icon={faBorderAll} className='courses-top-bar__icon' />
						</div>
						<div className='courses-top-bar__column-btn'>
							<FontAwesomeIcon icon={faAlignLeft} className='courses-top-bar__icon' />
						</div>
						<div className='courses-top-bar__selection'>
							<span className='courses-top-bar__selection-title'>
								مرتب سازی پیش فرض
								<FontAwesomeIcon icon={faAngleDown} className='courses-top-bar__icon' />
							</span>
							<ul className='courses-top-bar__selection-list'>
								<li className='courses-top-bar__selection-item courses-top-bar__selection-item--active'>
									مرتب سازی پیش فرض
								</li>
								<li className='courses-top-bar__selection-item'>مرتب سازی بر اساس محبوبیت</li>
								<li className='courses-top-bar__selection-item'>مرتب سازی بر اساس امتیاز</li>
								<li className='courses-top-bar__selection-item'>مرتب سازی بر اساس آخرین</li>
								<li className='courses-top-bar__selection-item'>مرتب سازی بر اساس ارزان ترین</li>
								<li className='courses-top-bar__selection-item'>مرتب سازی بر اساس گران ترین</li>
							</ul>
						</div>
					</div>
					<div className='courses-top-bar__left'>
						<form action='#' className='courses-top-bar__form'>
							<input type='text' className='courses-top-bar__input' placeholder='جستجوی دوره ...' />
							<FontAwesomeIcon icon={faSearch} className='courses-top-bar__search-icon' />
						</form>
					</div>
				</div>
				<div className='courses-content'>
					<div className='container'>
						<div className='row'>
							{courses.map(course => (
								<CourseBox key={course.image} {...course} />
							))}
						</div>
					</div>
				</div>
				<Pagination />
			</div>
		</section>
	)
}

export default Courses
