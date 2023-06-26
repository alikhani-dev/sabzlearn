import { useMenusQuery } from '../../../hooks/useMenus.query'
import MenuItem from './Menu-item'

const Menu: React.FC = () => {
	const { data } = useMenusQuery.menus()

	return (
		<ul className='main-header__menu'>
			{data?.map(({ title, submenus, _id }) => (
				<MenuItem key={_id} title={title} submenus={submenus} />
			))}
		</ul>
	)
}

export default Menu
