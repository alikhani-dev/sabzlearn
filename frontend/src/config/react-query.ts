import { QueryClient } from '@tanstack/react-query'

const twentyFourHoursInMs = 1000 * 60 * 60 * 24

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: twentyFourHoursInMs,
			refetchOnWindowFocus: false,
			refetchOnReconnect: false,
			retry: false
		}
	}
})

export default queryClient
