import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

type Props = { to: string; title: string }

const SidebarArticlesItem: React.FC<Props> = ({ title, to }) => {
	return (
		<li className='sidebar-articles__item'>
			<FontAwesomeIcon icon={faAngleLeft} className='sidebar-articles__icon' />
			<Link to={to} className='sidebar-articles__link'>
				{title}
			</Link>
		</li>
	)
}

export default SidebarArticlesItem
