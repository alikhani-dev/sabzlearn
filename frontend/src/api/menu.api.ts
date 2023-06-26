import api from '../services/api'
import endpoint from '../services/endpoint'

export type menuItem = {
	_id: string
	href: string
	title: string
	parent: string
	createdAt: string
	updatedAt: string
	__v: number
}

export const menusTopBarApi = async () => {
	const response = await api.get(endpoint.menus.topBar)
	return response.data as menuItem[]
}

// * -----------------------------------------------------------------------

export type Menus = menuItem & {
	submenus: menuItem[]
}

export const menusApi = async () => {
	const response = await api.get(endpoint.menus.all)
	return response.data as Menus[]
}
