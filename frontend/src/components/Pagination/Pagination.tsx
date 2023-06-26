import { Link } from 'react-router-dom'
import './pagination.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Pagination: React.FC = () => {
	return (
		<div className='courses-pagination'>
			<ul className='courses__pagination-list'>
				<li className='courses__pagination-item'>
					<Link to='/' className='courses__pagination-link'>
						<FontAwesomeIcon icon={faArrowRight} className='courses__pagination-icon' />
					</Link>
				</li>
				<li className='courses__pagination-item'>
					<Link to='/' className='courses__pagination-link courses__pagination-link--active'>
						1
					</Link>
				</li>
				<li className='courses__pagination-item'>
					<Link to='/' className='courses__pagination-link'>
						2
					</Link>
				</li>
				<li className='courses__pagination-item'>
					<Link to='/' className='courses__pagination-link'>
						3
					</Link>
				</li>
				<li className='courses__pagination-item'>
					<Link to='/' className='courses__pagination-link'>
						<FontAwesomeIcon icon={faArrowLeft} className='courses__pagination-icon' />
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Pagination
