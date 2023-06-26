import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
import { TopBar } from './TopBar'
import Menu from './Menu'
import './navbar.css'

const Header: React.FC = () => {
	const { user } = useAuth()
	const { pathname } = useLocation()

	return (
		<header className='header'>
			<TopBar />
			<div className='main-header'>
				<div className='container-fluid'>
					<div className='main-header__content'>
						<div className='main-header__right'>
							<img src='/images/logo/Logo.png' className='main-header__logo' alt='لوگوی سبزلرن' />
							<Menu />
						</div>
						<div className='main-header__left'>
							<Link to='/' className='main-header__search-btn'>
								<FontAwesomeIcon icon={faSearch} className='main-header__search-icon' />
							</Link>
							<Link to='/' className='main-header__cart-btn'>
								<FontAwesomeIcon icon={faShoppingCart} className='main-header__cart-icon' />
							</Link>
							<Link
								to={user ? '/' : pathname === '/login' ? '/register' : '/login'}
								className='main-header__profile'>
								<span>{user ? user.name : 'ثبت نام / ورود'}</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
