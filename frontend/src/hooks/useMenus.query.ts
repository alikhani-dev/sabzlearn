import { useQuery } from '@tanstack/react-query'
import { menusApi, menusTopBarApi } from '../api/menu.api'
import endpoint from '../services/endpoint'

const useMenusTopBar = () => {
	return useQuery({ queryFn: menusTopBarApi, queryKey: [endpoint.menus.topBar] })
}

const useMenus = () => {
	return useQuery({ queryFn: menusApi, queryKey: [endpoint.menus.all] })
}

export const useMenusQuery = {
	topBar: useMenusTopBar,
	menus: useMenus
}
