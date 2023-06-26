import { Link } from 'react-router-dom'

type Props = {
	title: string
	href: string
}

const TopBarItem: React.FC<Props> = ({ title, href }) => {
	return (
		<li className='top-bar__item'>
			<Link to={href} className='top-bar__link'>
				{title}
			</Link>
		</li>
	)
}

export default TopBarItem
