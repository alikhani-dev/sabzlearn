import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMenusQuery } from '../../../hooks/useMenus.query'
import { shuffle } from '../../../utils/array'
import { Link } from 'react-router-dom'
import Item from './TopBar-Item'
import './top-bar.css'

const TopBar: React.FC = () => {
	const { data, isSuccess } = useMenusQuery.topBar()

	return (
		<div className='top-bar'>
			<div className='container-fluid'>
				<div className='top-bar__content'>
					<div className='top-bar__right'>
						<ul className='top-bar__menu'>
							{isSuccess &&
								shuffle(data)
									.slice(0, 5)
									.map(({ _id, href, title }) => <Item key={_id} title={title} href={href} />)}
						</ul>
					</div>
					<div className='top-bar__left'>
						<div className='top-bar__email'>
							<Link to='/' className='top-bar__email-text top-bar__link'>
								sabzlearn@gmail.com
							</Link>
							<FontAwesomeIcon icon={faEnvelope} className='top-bar__email-icon' />
						</div>
						<div className='top-bar__phone'>
							<Link to='/' className='top-bar__phone-text top-bar__link '>
								۰۹۹۲۱۵۵۸۲۹۳
							</Link>
							<FontAwesomeIcon icon={faPhone} className='top-bar__phone-icon' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopBar
