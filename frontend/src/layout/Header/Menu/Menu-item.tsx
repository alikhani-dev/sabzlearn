import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { menuItem } from '../../../api/menu.api'

type Props = {
	title: string
	submenus: menuItem[]
}

const MenuItem: React.FC<Props> = ({ title, submenus }) => {
	return (
		<li className='main-header__item'>
			<span className='main-header__link'>
				{title}
				{submenus.length != 0 && (
					<>
						<FontAwesomeIcon icon={faAngleDown} />
						<ul className='main-header__dropdown'>
							{submenus.map(({ title, href, _id }) => (
								<li key={_id} className='main-header__dropdown-item'>
									<Link to={href} className='main-header__dropdown-link'>
										{title}
									</Link>
								</li>
							))}
						</ul>
					</>
				)}
			</span>
		</li>
	)
}

export default MenuItem
