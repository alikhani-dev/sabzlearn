import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './context/AuthProvider'
import queryClient from './config/react-query'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import './styles/reset.css'
import './styles/variables.css'
import './styles/defaults.css'
import './styles/helpers.css'
import './styles/fonts.css'

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</StrictMode>
)
