import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

type Props = { name: string; to: string; isLastItem?: boolean }

const BreadcrumbItem: React.FC<Props> = ({ to, name, isLastItem }) => {
	return (
		<li className='breadcrumb__item'>
			<Link to={to} className='breadcrumb__link'>
				{name}
				{!isLastItem && <FontAwesomeIcon icon={faAngleLeft} className='breadcrumb__icon' />}
			</Link>
		</li>
	)
}

export default BreadcrumbItem
