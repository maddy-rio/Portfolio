// client/index.tsx
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import App from './components/App.tsx'
import { routes } from './routes'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Router>
      <QueryClientProvider client={queryClient}>
        {routes}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Router>,
  )
})
